Rails.application.routes.draw do
  get 'static_pages/home'

  root 'static_pages#home'
  get 'users/new'

  get 'hello_world', to: 'hello_world#index'
  get 'signup', to: 'users#new'
  post 'signup', to: 'users#create'
  resources :users
end
