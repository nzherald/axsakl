Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    resources :stops, only: [:index, :show]
    resources :meshblocks, only: [:index, :show]
  end

end
