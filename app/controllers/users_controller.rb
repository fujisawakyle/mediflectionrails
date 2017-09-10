class UsersController < ApplicationController
  layout "user"


  def show
    @user = User.find(params[:id])
    @login_props = { name: @user.name }
  end

  def new
  end
end
