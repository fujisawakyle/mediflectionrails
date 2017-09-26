Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  get 'static_pages/home'

  root 'static_pages#home'

  get 'mediflections', to: 'mediflections#index'

  resources :mediflections,        only: [:create, :update]
end
