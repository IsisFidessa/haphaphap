Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
     resources :dishes, only: [:index, :create, :destroy, :update]
    end
  end
  root to: 'home#index'
  get '/dishes', to: 'dishes#index'
  get '/dishes/add', to: 'dishes#add'
  get '/dishes/:id', to: 'dishes#show'
  get '/ingredients', to: 'ingredients#index'
  get '/ingredients/add', to: 'ingredients#add'

end
