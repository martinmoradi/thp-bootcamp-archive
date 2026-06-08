#Prends le programme exo_18.rb et créé un programme exo_19.rb qui va reprendre l'array des emails créés, et n'afficher que les emails avec un nombre pair.
arr_emails = []
i = 0
50.times do   
    if i < 10 
        email = "jean.dupont.0"+i.to_s+"@email.fr" 
    else
    email = "jean.dupont."+i.to_s+"@email.fr" 
    end
    arr_emails << email
    i+=1
end

new_arr = []
arr_emails.each do |mail|
    parts = mail.split("@")
    firstPart = parts[0]
    number = firstPart[-1].to_i
    if number.even?
     new_arr << mail
    end
end
print new_arr

# on veut 1 -> iterate dans l'array pour chaque element (mail)
# split l'element au niveau du @ 
# pour vérifier si le last index du premier cut % 2 == 0
# si oui, retourner dans un nouvel array