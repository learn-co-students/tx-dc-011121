Rails.application.routes.draw do
  # localhost:3000/api/v1/

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index] #route only used for testing

      post '/fakelogin', to: 'auth#fake_create'
      post '/login', to: 'auth#create'
    end
  end
end
