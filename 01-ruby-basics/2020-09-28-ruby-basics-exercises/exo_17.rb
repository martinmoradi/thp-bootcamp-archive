#Notre programme exo_16.rb est devenu beau gosse. Écris un programme exo_17.rb qui va faire la même chose, sauf que si X et Y sont égaux, il dira "Il y a n ans, tu avais la moitié de l'âge que tu as aujourd'hui".

puts "Rentre ton âge :"
user_birth_year = 2020 - gets.chomp.to_i 

(user_birth_year..2020).each do |num_year|
    if 2020 - num_year == num_year - user_birth_year
    puts "Il y a #{2020-num_year} ans, tu avais la moitié de l'âge que tu as aujourd'hui."
    else 
    puts "Il y a #{2020-num_year} ans, tu avais #{ num_year- user_birth_year} ans."
    end
end

