#Écris un programme exo_15.rb qui demande son année de naissance à l'utilisateur et qui va afficher chaque année depuis son année de naissance jusqu'aujourd'hui. Pour chaque année affichée, le programme devra annoncer l'âge que l'utilisateur avait cette année-là.

puts "Rentre ton année de naissance :"
user_birth_year = gets.chomp.to_i
(user_birth_year..2020).each { |num| puts "En #{num}, tu avais #{ num - user_birth_year} ans." }