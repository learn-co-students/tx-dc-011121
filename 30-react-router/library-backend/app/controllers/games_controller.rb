class GamesController < ApplicationController

    def index
        @games = Game.all
        render json: @games, status: :ok
    end

    def create
        @game = Game.new(games_params)
        @game.user_id = current_user
        @game.save
        render json: @game, status: :ok
    end

    def destroy
        @game = Game.find_by(id: params[:id])
        @game.destroy
        render json: @game, status: :ok
    end

    private
    def games_params
        params.require(:game).permit(:title,:production,:img,:platform)
    end

end
