Rails.application.routes.draw do
  root to: "pages#index"
  post '/', to: 'pages#test'
end
