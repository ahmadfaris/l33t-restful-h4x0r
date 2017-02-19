Rails.application.routes.draw do
  match '*any' => 'application#options', :via => [:options]
  root to: "pages#index"
  post '/', to: 'pages#test'
end
