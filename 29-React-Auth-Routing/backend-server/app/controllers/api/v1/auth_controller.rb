class Api::V1::AuthController < ApplicationController

  def fake_create # POST /api/v1/login
    byebug
  end

  def create # POST /api/v1/login
    byebug
    # @user = User.find_by(username: params[:username])
    # if @user && @user.authenticate(params[:password])
    # end
  end

end
