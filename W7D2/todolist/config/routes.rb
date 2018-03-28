Rails.application.routes.draw do
  namespace :api do
    resources :todos, only: [:show, :update, :destroy, :index, :create], defaults: { format: :json }
  end

  get root to: 'static_pages#root'
end
