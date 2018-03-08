class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    User.find_by(session_token: session[:session_token])
  end

  def login_user!
    user = User.find_by_credentials(user_params[:user_name], user_params[:password])

    if user.nil?
      flash[:errors] = ["Wrong credentials"]
      return false
    else
      session[:session_token] = user.reset_session_token!
      return true
    end
  end

  def redirect_if_logged_in
    if user_is_logged_in?
      flash[:errors] = ["You are already logged in"]
      redirect_to cats_url
    end
  end

  def user_is_logged_in?
    !(session[:session_token].nil? || session[:session_token].empty?)
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :password)
  end
end
