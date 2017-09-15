Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  #accept data back from FB
  # devise_for :users
  namespace :api do
    # resources :users
    resources :mediflections
  end
  # namespace :api do
  #   namespace :v1 do
  #     resources :items, only: [:index, :create, :destroy, :update]
  #   end
  # end

  get 'static_pages/home'

  root 'static_pages#home'
  # get 'users/new'
  get 'mediflections', to: 'mediflections#index'
  # get 'hello_world', to: 'hello_world#index'
  # get 'signup', to: 'users#new'
  # post 'signup', to: 'users#create'
  # resources :users
  resources :mediflections,        only: [:create, :update]
end
