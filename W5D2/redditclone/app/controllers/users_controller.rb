class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.new(user_params)
    if user.save
      login(user)
      redirect_to subs_url
    else
      flash.now[:errors] = user.errors.full_messages
      render :new
    end
  end

  def index
    render :index
  end

  def show
    @user = User.find_by_id(params[:id])
    render :show
  end

  def destroy

  end

  def edit
  end

  def update
  end

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
