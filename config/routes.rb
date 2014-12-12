Rails.application.routes.draw do
  root 'application#home'

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'

  if Rails.application.secrets.loaderio_token
    get Rails.application.secrets.loaderio_token, to: 'loaderios#show'
  end

  get 'timeout', to: 'test_routes#timeout'

  resource :account, only: [:edit, :update] do
    get :sites
  end

  resource :health, only: [:show]

  resource :robots, only: [:show]

  resource :site, only: [:edit, :update] do
    match :css, via: [:get, :patch]

    resources :images, only: [:index]
    resources :messages, only: [:index, :show]
    resources :users, only: [:index]
  end

  resource :sitemap, only: [:show]

  resources(
    :pages,
    path: '',
    only: [:new, :create, :show, :edit, :update, :destroy]
  ) do
    member do
      post :contact_form
    end
  end

  match '*path', to: 'application#page_not_found', via: :all
end
