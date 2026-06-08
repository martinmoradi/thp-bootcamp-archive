puts "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
print "> "
steps = gets.chomp.to_i 
i = steps - 1 
(1..steps).each do |num_step|
    i.times {print " "}
    num_step.times {print "#"} 
    puts
    i -= 1
end
