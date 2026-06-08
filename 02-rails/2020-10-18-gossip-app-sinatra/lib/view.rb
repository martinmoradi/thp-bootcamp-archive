# frozen_string_literal: true

class View
  def create_gossip
    params = {}
    puts "Quel est l'auteur du potin ?"
    params[:author] = gets.chomp
    puts 'Quel est le potin ?'
    params[:content] = gets.chomp
    params
  end

  def index_gossips(gossips)
    gossips.each { |gossip| puts "#{gossip.author} a dit : #{gossip.content}" }
  end

  def destroy(gossips)
    puts 'Quel potin veux-tu supprimer ?'
    puts 'Choisis la valeur correspondante :'
    gossips.each_with_index { |gossip, idx| puts "#{idx + 1} - #{gossip.author} : #{gossip.content}" }
    params = gets.chomp.to_i
    gossips.delete_at(params - 1)
    gossips
  end
end
