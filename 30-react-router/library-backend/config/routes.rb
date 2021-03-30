Rails.application.routes.draw do
  resources :users
  resources :games
  resources :sessions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
