class PostsController < ApplicationController
  def new
    @subs = Sub.all
  end

  def create
    debugger
    post = Post.new(post_params)
    post.author_id = current_user.id
    destination = subs_url
    if params[:sub_id]
      create_post_subs(post, [params[:sub_id]])
      destination = sub_url(params[:sub_id])
    elsif params[:subs]
      create_post_subs(post, params[:subs])
    else
      #screwed

    end
    unless post.save
      flash[:errors] = post.errors.full_messages
    end
    redirect_to destination
  end

  def destroy
    post = Post.find(params[:id])
    post.post_subs.delete(PostSub.find_by(post_id: post.id, sub_id: params[:sub_id]))
    if post.post_subs.empty?
      post.destroy
    end
    redirect_to sub_url(params[:sub_id])
  end

  private

  def create_post_subs(post, subs_ids)
    subs_ids.each do |sub_id|
      post.subs << Sub.find_by_id(sub_id)
    end
  end

  def post_params
    params.require(:post).permit(:title, :url, :content)
  end
end
