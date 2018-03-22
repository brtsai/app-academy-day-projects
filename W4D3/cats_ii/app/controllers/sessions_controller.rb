class SessionsController < ApplicationController
  before_action :redirect_if_logged_in, only: :new
  def new
    render :new
  end

  def create
    if login_user!
      redirect_to cats_url
    else
      render :new
    end
  end

  def destroy
    current_user.reset_session_token! unless current_user.nil?
    session[:session_token] = ""
    redirect_to cats_url
  end
end
