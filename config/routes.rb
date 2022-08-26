Rails.application.routes.draw do
  devise_for :users,
             controllers: {
               sessions: 'api/v1/users/sessions',
               registrations: 'api/v1/users/registrations'
             }

  namespace :api do
    namespace :v1 do
      # get 'tweets', to: 'members#show'
      resources :tweets, except: %i[edit update] do
        member do
          post :retweet
        end
      end
      resources :likes, only: :create
    end
  end
#
  get '/tweets/*b', to: 'sites#index'

  # root to: 'api/v1/tweets#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
