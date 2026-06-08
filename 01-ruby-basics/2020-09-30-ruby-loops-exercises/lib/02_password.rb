def signup
    puts "Choisis ton mot de passe :"
    print " >"
    return gets.chomp
end

def login(user_password)
    puts "Rentre ton mot de passe :"
    print " >"
    login_success = false
    temp_password = gets.chomp
    while temp_password != user_password
        puts "Mauvais mot de passe, merci de réessayer :"
        temp_password = gets.chomp
    end
    login_success = true
    return login_success
end

def welcome_screen
    puts "Bienvenue sur ton dashboard !"
    puts "Cet exercice était assez simple..."
    puts "J'en peux plus des pyramides :("
end

def perform
   user_password = signup
   login_success = login(user_password)
   if login_success == true
       welcome_screen
   end
end

perform