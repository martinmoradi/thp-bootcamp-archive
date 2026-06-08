#Écris un programme exo_12.rb qui demande un nombre à l'utilisateur, puis qui compte jusqu'à ce nombre.

puts "Rentre un nombre :"
(1..gets.chomp.to_i).each { |num| puts num }
