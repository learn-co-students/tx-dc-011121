class SessionsController < ApplicationController

    def create
        @user = User.find_by(email: users_params[:email])
        if @user && @user.authenticate(users_params[:password])
            payload = { user_id: @user.id }
            token = JWT.encode(payload,'mySecret','HS256')
            render json: { token: token }
        else
            render json: { msg: "User doesn't exist. Try again!"}
        end
    end

    private
    def users_params
        params.require(:user).permit(:email,:password)
    end

end
