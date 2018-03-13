class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to user_url(user.id)
    else
      flash.now[:errors] = user.errors.full_messages
      render :new
    end
  end
 
  #TODO: bounce user if id doesn't match current session's user

  def show
    @user = User.find_by(id: params[:id])
    if @user.nil?
      redirect_to :new
    end
    render :show
  end
  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
