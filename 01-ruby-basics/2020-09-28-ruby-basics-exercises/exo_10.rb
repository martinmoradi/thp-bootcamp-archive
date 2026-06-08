#Écris un programme exo_10.rb qui demande son année de naissance à l'utilisateur, puis qui ressort l'âge que l'utilisateur a eu en 2017.

puts "Bonjour, quel est ton année de naissance ?"
birth_year = gets.chomp.to_i
puts "En 2017, tu avais #{2017 - birth_year} ans."