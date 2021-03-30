class ApplicationController < ActionController::API
    def current_user
        token = request.headers['Auth-Key']
        payload = JWT.decode(token,'mySecret',true,{ algorithm: 'HS256' })
        @user_id = payload[0]['user_id']
    end
end
