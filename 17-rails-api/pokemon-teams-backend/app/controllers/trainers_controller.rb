class TrainersController < ApplicationController

  def index
    @trainers = Trainer.all
    render json: @trainers.as_json(
      include: {
        pokemons: {
          except: [:created_at, :updated_at]
        }
      },
      except: [:created_at, :updated_at]
    )
  end

end
