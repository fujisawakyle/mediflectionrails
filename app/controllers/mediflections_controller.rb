class MediflectionsController < ApplicationController
  before_action :set_mediflection, only: [:show, :edit, :update, :destroy]

  def index
    # render json: User.find(1).mediflections.all
    @mediflections = current_user.mediflections.all
  end

  def create
    @mediflection = current_user.mediflections.create(mediflection_params)

    respond_to do |f|
      if @mediflection.save
        f.html {redirect_to root_path, notice: "Mediflection was created!"}

        f.json { render json: current_user.mediflections.all }
      else
        f.html { render :error}
      end

    end

    # @user = User.find(1)
    # @post = User.find(1).mediflections.build(mediflection_params)
    # @post.save
    # redirect_to user_url(@user)
  end

  def update
    respond_to do |f|
      if current_user.mediflections.find_by_date(mediflection_params[:date]).update_attributes(mediflection_params)
        f.html { redirect_to root_path, notice: "Mediflection was updated!"}
        #f.json { render json: current_user.mediflections.find_by_date(mediflection_params[:date]) }
      else
        f.html { render :index }
      end
    end
  end

  private

    def set_mediflection
      @mediflection = current_user.mediflections.find_by_date(mediflection_params[:date])
    end
    def mediflection_params
      params.require(:mediflection).permit(:journal, :time, :date)
    end
end
