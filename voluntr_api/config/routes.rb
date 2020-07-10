Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    # /api..
    namespace :v1 do
      # /api/v1...
      resources :opportunities do
        resources :messages, only: [:create, :destroy, :index, :show]
        resources :publishings, only: :create
      end
      # /api/v1/auctions
      resource :session, only: [:create, :destroy]
      # /api/v1/users
      resources :users, shallow: true, only: [:create, :new, :show, :index] do
      # api/v1/users/current
        get :current, on: :collection
        # default
        # api/v1/user/:id/current
      end
    end
  end
end