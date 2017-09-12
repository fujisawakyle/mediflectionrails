class UsersController < ApplicationController
  layout "user"


  def show
    @user = User.find(params[:id])
    @mediflections = @user.mediflections
    #@login_props = { name: @user.name }
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
