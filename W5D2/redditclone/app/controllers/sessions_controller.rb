class SessionsController < ApplicationController
  def create
    user = User.find_by_creds(user_params[:username], user_params[:password])

    unless user.nil?
      login(user)
      session[:session_token] = user.session_token
      redirect_to subs_url
    else
      flash[:errors] = ["Invalid Username or Password"]
      render :new
    end
  end

  def new
    render :new
  end

  def destroy
    logout
    redirect_to new_session_url
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
