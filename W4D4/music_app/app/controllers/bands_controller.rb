class BandsController < ApplicationController
  
  def index
    @bands = Band.all
    render :index
  end

  def create
    band = Band.new(band_params)
    if band.save
      redirect_to band_url(band)
    else
      flash.now[:errors] = band.errors.full_messages
      render :new
    end
    nil
  end

  def new
    @band = Band.new
    render :new
  end

  def edit
    @band = Band.find_by(id: params[:id])
    unless @band.nil?
      render :edit
    else
      render 'shared/not_found', status: 404
    end
  end

  def show
    @band = Band.find_by(id: params[:id])
    unless @band.nil?
      render :show
    else
      render 'shared/not_found', status: 404
    end
  end

  def update
    band = Band.find_by(id: params[:id])
    if band.update(band_params)
      redirect_to band_url(band)
    else
      flash[:errors] = band.errors.full_messages
      redirect_to edit_band_url(band.id)
    end
  end

  def destroy
    band = Band.find_by(id: params[:id])
    unless band.nil?
      band.destroy
    end
    redirect_to bands_url
  end

  private

  def band_params
    params.require(:band).permit(:name)
  end

end
