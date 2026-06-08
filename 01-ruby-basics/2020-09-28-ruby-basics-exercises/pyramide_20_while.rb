puts "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
print "> "
steps = gets.chomp.to_i 
i = 0 
while i < steps
    (i+1).times {print "#"} 
    puts
    i+=1
end