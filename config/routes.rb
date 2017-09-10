Rails.application.routes.draw do
  get 'users/new'

  get 'hello_world', to: 'hello_world#index'
  get 'signup', to: 'users#new'
  resources :users
end
