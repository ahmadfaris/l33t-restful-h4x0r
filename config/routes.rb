Rails.application.routes.draw do
  match 'http://faris-pixl8.herokuapp.com/' => 'pages#test', :via => [:options, :get, :post]
  match 'https://www.pixl8.co.uk/api/jobs/v1/application/' => 'pages#test', :via => [:options, :get, :post]
  match '*any' => 'application#options', :via => [:options]
  root to: "pages#index"
  post '/', to: 'pages#test'
end
