#Écris un programme exo_09.rb qui demande le prénom de l'utilisateur, qui lui demande après son nom de famille, et qui salue l'utilisateur avec "Bonjour, prénom nom !"

puts "Bonjour, quel est ton prénom ?"
user_first_name = gets.chomp
puts "Merci, quel est ton nom de famille ?"
user_last_name = gets.chomp
puts "Bonjour, " + user_first_name + " " + user_last_name + "!"