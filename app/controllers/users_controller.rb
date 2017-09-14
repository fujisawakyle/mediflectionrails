class UsersController < ApplicationController
  layout "application"


  def show
    @user = User.find(params[:id])
    @mediflections = @user.mediflections
    @mediflectionPost = User.find(1).mediflections.build
    @mediflection_props = { name: @user.name, mediflection: @mediflections }
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash.now[:success] = "Welcome to Mediflection!"
      redirect_to user_url(@user)
    else
      render 'new'
    end
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password,
                                    :password_confirmation)
    end
end
