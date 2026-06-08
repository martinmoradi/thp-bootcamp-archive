puts "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
print "> "
steps = gets.chomp.to_i 
i = 1
while steps > 0 
    (steps-1).times {print " "}
    i.times {print "#"}
    puts
    steps -= 1
    i += 1 
end
