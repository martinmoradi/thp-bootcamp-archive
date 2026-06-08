def pyramid_height
    puts "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? (choisis un nombre impair)"
    height=gets.to_i
    while !height.odd?
        puts "Non, choisis un nombre impair !"
        height=gets.to_i
    end    
    return height
end

def pyramid_wtf(pyramid_height)
    (1..pyramid_height).each do |row|
        if row < pyramid_height.to_f / 2 
            row_string = "#" * (2 * row - 1)                  
        elsif row > pyramid_height.to_f / 2           
            row_string = "#" *  ( (pyramid_height - row) * 2 + 1 )        
        else
            row_string = "#" * pyramid_height
        end
        puts row_string.center(pyramid_height) 
    end
end

pyramid_wtf(pyramid_height)
