class UsersController < ApplicationController

    def create
        @user = User.create(users_params)
        render json: { msg: "user created."}
    end

    private
    def users_params
        params.require(:user).permit(:email,:password)
    end

end
