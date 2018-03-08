class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(user_params[:user_name], user_params[:password])
    if user.nil?
      flash[:errors] = ["Wrong credentials"]
      render :new
    else
      session[:session_token] = user.reset_session_token!
      redirect_to cats_url
    end
  end

  def destroy
    current_user.reset_session_token! unless current_user.nil?
    session[:session_token] = ""
    redirect_to cats_url
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :password)
  end
end
