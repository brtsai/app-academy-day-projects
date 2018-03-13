class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    email = user_params[:email]
    password = user_params[:password]
    user = User.find_by_credentials(email, password)
    if user.nil?
      flash.now[:errors] = ["Invalid email or password"]
      render :new
    else
      log_in_user!(user)
      redirect_to user_url(user.id)
    end
  end

  def destroy
    log_out_current_user!
    redirect_to new_session_url
  end
end
