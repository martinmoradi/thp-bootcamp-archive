#Écris un programme exo_14.rb qui demande un nombre à l'utilisateur, puis qui affiche un compte à rebours à partir de ce nombre, jusqu'à 0.

puts "Rentre un nombre :"
(gets.chomp.to_i.downto(0)).each { |num| puts num }
