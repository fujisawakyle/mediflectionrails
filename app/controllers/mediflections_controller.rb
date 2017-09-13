class MediflectionsController < ApplicationController

  def create
    @user = User.find(1)
    @post = User.find(1).mediflections.build(mediflection_params)
    @post.save
    redirect_to user_url(@user)
  end

  def update

  end

  private

    def mediflection_params
      params.require(:mediflection).permit(:journal, :time, :date)
    end
end
