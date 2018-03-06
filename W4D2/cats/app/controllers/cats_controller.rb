class CatsController < ApplicationController
  def index
    @cats = Cat.all

    render :index
  end

  def create
    @cat = Cat.new(cats_params)

    if @cat.save
      redirect_to cat_url(@cat)
    else
      render plain: @cat.errors.full_messages, status: 422
    end
  end

  def new
    render :new
  end

  def edit

  end

  def show
    @cat = Cat.find_by(id: params[:id])

    if @cat.nil?
      render plain: "Cat doesn't exist", status: 404
    else
      render :show
    end
  end

  def update

  end

  def destroy

  end

  private

  def cats_params
    params.require(:cat).permit(:birth_date, :color, :name, :sex, :description)
  end
end
