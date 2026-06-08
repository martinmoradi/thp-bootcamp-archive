def game
    puts "Bienvenue dans le jeu qui révolutionnera l'histoire des jeux-vidéos !"   
    show_player_state(1)
    player_step = 1
    while player_step < 10 
        puts "Appuyez sur n'importe quel touche pour lancer un dé."
        get_char
        player_step += steps(dice_roll)
        show_player_state(player_step)
    end
    puts "BRAVO !!!!!!!!!!!!!!"
end


def dice_roll
    return rand(1..6)
end


def show_player_state(player_step)
    puts "Tu es sur la marche n° #{player_step}"
end


 def steps(dice_roll)
    puts "Le dé fait un #{dice_roll}!"
    if dice_roll == 5 || dice_roll == 6
        puts "Tu avances d'une marche !"
        return 1
    elsif dice_roll == 1
        puts "Tu recules d'une marche :("
        return -1
    else 
        puts "Magicarpe lance trempette, mais rien ne se passe !"
        return 0
    end
end

def get_char # https://stackoverflow.com/Questions/174933/how-to-get-a-single-character-without-pressing-enter
    state = `stty -g`
    `stty raw -echo -icanon isig`
    STDIN.getc.chr
    ensure
    `stty #{state}`
end

game