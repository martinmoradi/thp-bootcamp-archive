puts "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
print "> "
steps = gets.chomp.to_i 
(1..steps).each do |num_step|
    num_step.times {print "#"} 
    puts
end
