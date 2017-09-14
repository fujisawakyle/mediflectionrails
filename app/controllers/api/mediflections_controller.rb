module Api
  class MediflectionsController < ApplicationController
    def index
      render json: User.find(1).mediflections.all
    end
  end
end
