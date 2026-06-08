# frozen_string_literal: true

require_relative 'controller'
require 'pry'

class Router
  def initialize
    @controller = Controller.new
  end

  def perform
    puts 'Bienvenue dans The Gossip Project !'

    loop do
      puts 'Que souhaites-tu faire ?'
      puts '1 - Créer un potin.'
      puts '2 - Lister tous les potins !'
      puts '3 - Supprimer un potin'
      puts "4 - Quitter l'app."
      params = gets.chomp.to_i

      case params
      when 1
        puts 'Tu as choisi de créer un gossip !'
        @controller.create_gossip

      when 2
        puts "Tu as choisis d'afficher tous les gossips !"
        @controller.index_gossips

      when 3
        puts 'Tu as choisi de supprimer un potin !'
        @controller.destroy

      when 4
        puts 'A bientôt !'
        break

      else
        puts "Ce choix n'existe pas, merci de réessayer."
      end
    end
  end
end
