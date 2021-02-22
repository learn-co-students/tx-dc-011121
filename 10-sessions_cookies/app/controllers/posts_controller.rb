class PostsController < ApplicationController

  before_action :find_post, only: [:show, :edit]

  def index
    @posts = Post.all
    @user = User.find_by(id: session[:user_id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(posts_params)
    if @post.valid?
      @post.save
      redirect_to posts_path
    else
      flash[:errors] = @post.errors.full_messages
      redirect_to new_post_path
    end
  end

  def show
  end

  private
  def posts_params
    params.require(:post).permit(:title,:content,:user_id)
  end

  def find_post
    @post = Post.find_by(id: params[:id])
  end

end
