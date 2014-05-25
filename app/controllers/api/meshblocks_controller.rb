class Api::MeshblocksController < ApplicationController
  respond_to :json

  def index
    @meshblocks = Meshblock.all
    respond_with @meshblocks
  end

  def show
    @meshblock = Meshblock.find(params[:id])
    respond_with @meshblock
  end
end
