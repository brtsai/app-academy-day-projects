Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create, :show]
  resources :bands
  resource :session, only: [:new, :create, :destroy]
  resources :not_found, only: [:index]
end
