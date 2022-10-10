Rails.application.routes.draw do
  # resources :reviews
  resources :users, only: [:index]
  # resources :product_colors
  # resources :colors

  # resources :reviews, only: [:show, :index, :create]
  # resources :products
  # resources :suppliers
  # resources :categories

  # resources :products, only: [:index, :show]
  resources :suppliers, only: [:index]
  resources :categories, only: [:index]
  resources :colors, only: [:index]
  # resources :login, only: [:index]
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy" 

  resources :products, only: [:show, :index] do
    # nested resource for reviews
    resources :reviews, only: [:show, :index]
  end

  resources :reviews, only: [:show, :index, :create]


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
