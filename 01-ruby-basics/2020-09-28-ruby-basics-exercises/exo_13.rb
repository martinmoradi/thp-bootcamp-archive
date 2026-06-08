#Écris un programme exo_13.rb qui demande son année de naissance à l'utilisateur, puis qui va ressortir chaque année depuis son année de naissance jusqu'aujourd'hui.

puts "Rentre ton année de naissance :"
(gets.chomp.to_i..2020).each { |num| puts num }
