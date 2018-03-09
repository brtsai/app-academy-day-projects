class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :user_params, :current_user, :logged_in?

  private

  def current_user
    session_token = session[:session_token]
    user = User.find_by(session_token: session_token)
    user
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def logged_in?
    !!(current_user)
  end

  def log_in_user!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def log_out_current_user!
    return if current_user.nil?
    current_user.reset_session_token!
    session[:session_token] = ""
  end
end
