# frozen_string_literal: true

require_relative 'gossip'
require_relative 'view'
require 'csv'

class Controller
  def initialize
    @view = View.new
  end

  def create_gossip
    params = @view.create_gossip
    gossip = Gossip.new(params[:author], params[:content])
    gossip.save
  end

  def index_gossips
    all_gossips = Gossip.all
    @view.index_gossips(all_gossips)
  end

  def destroy
    gossips = Gossip.all
    params = @view.destroy(gossips)
    Gossip.save_after_destroy(gossips)
  end
end
