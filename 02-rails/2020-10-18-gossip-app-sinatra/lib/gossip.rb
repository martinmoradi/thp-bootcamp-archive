# frozen_string_literal: true

require 'csv'

class Gossip
  attr_reader :author, :content

  def initialize(author, content)
    @content = content
    @author = author
  end

  def save
    CSV.open('lib/db/gossip.csv', 'a+') { |csv| csv << [@author, @content] }
  end

  def self.all
    all_gossips = []
    file = CSV.read('db/gossip.csv')
    file.each do |line|
      gossip_temp = Gossip.new(line[0], line[1])
      all_gossips << gossip_temp
    end
    all_gossips
  end

  def self.save_after_destroy(gossips)
    CSV.open('db/gossip.csv', 'w') do |csv|
      gossips.each { |gossip| csv << [gossip.author, gossip.content] }
    end
  end
end
