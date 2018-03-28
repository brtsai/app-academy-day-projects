class SubsController < ApplicationController
  before_action :set_sub, only: [:show, :edit, :update, :destroy]
  before_action :ensure_logged_in
  # GET /subs
  # GET /subs.json
  def index
    @subs = Sub.all
  end

  # GET /subs/1
  # GET /subs/1.json
  def show
    @posts = @sub.posts
  end

  # GET /subs/new
  def new
    @sub = Sub.new
  end

  # GET /subs/1/edit
  def edit
  end

  # POST /subs
  # POST /subs.json
  def create
    @sub = Sub.new(sub_params)

    if @sub.save
      @sub.moderators << current_user
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  # PATCH/PUT /subs/1
  # PATCH/PUT /subs/1.json
  def update
    respond_to do |format|
      if @sub.update(sub_params)
        format.html { redirect_to @sub, notice: 'Sub was successfully updated.' }
        format.json { render :show, status: :ok, location: @sub }
      else
        format.html { render :edit }
        format.json { render json: @sub.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /subs/1
  # DELETE /subs/1.json
  def destroy
    @sub.destroy
    respond_to do |format|
      format.html { redirect_to subs_url, notice: 'Sub was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sub
      @sub = Sub.find_by_id(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sub_params
      params.require(:sub).permit(:title, :description)
    end
end
