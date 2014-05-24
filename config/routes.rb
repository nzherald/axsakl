Rails.application.routes.draw do
  root to: 'home#index'

  resources :stops, only: [:index, :show]

end
