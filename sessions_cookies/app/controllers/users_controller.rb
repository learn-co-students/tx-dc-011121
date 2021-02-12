class UsersController < ApplicationController

  before_action :find_user, only: [:show, :edit]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(users_params)
    if @user.valid?
      @user.save
      session[:user_id] = @user.id
      redirect_to posts_path
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_path
    end
  end

  def show
  end

  private
  def users_params
    params.require(:user).permit(:username,:bio)
  end

  def find_user
    @user = User.find_by(id: params[:id])
  end

end
