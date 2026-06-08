#Écris un programme exo_18.rb qui va créer une liste de 50 faux emails et les stocker dans une array. Voici le format que devront avoir les faux emails :


arr_emails = []

i = 1
50.times do   
    if i < 10 
        email = "jean.dupont.0"+i.to_s+"@email.fr" 
    else
    email = "jean.dupont."+i.to_s+"@email.fr" 
    end
    arr_emails << email
    i+=1
end

print arr_emails
