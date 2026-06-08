#Le programme exo_15.rb est cool, mais on peut l'améliorer. Écris un programme exo_16.rb qui va demander son âge à l'utilisateur, et qui, pour chaque année depuis sa naissance, dira "Il y a X ans, tu avais Y ans".

puts "Rentre ton âge :"
user_birth_year = 2020 - gets.chomp.to_i 
(user_birth_year..2020).each { |num| puts "Il y a #{2020-num} ans, tu avais #{ num - user_birth_year} ans." }

