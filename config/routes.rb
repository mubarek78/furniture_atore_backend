Rails.application.routes.draw do
  # resources :products
  # resources :suppliers
  # resources :categories

  resources :products, only: [:index]
  resources :suppliers, only: [:index]
  resources :categories, only: [:index]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
