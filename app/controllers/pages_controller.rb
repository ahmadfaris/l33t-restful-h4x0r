class PagesController < ApplicationController
  require "uri"
  require "net/http"
  require 'httparty'
  include HTTParty

  def index
  end

  def test
    encoded_url = URI.encode('https://www.pixl8.co.uk/api/jobs/v1/application/')
    response =  HTTParty.post(encoded_url, 
                {
                  body: { "fullName" => application_details_params[:fullName],
                        "email" => application_details_params[:email], 
                        "message" => application_details_params[:message],
                        "website" => application_details_params[:website],
                        "github" => application_details_params[:github],
                        "linkedin" => application_details_params[:linkedin],
                        "testmode" => application_details_params[:testmode]
                      },
                  headers: { 'Content-Type' => 'application/x-www-form-urlencoded', 'Accept' => 'application/json' }
                })

    if response.success?
      render(
        json: {
          message: response.headers["x-status-message"],
          status: response.code
        }
      )
    else
    	render(
        json: {
          message: response.parsed_response["detail"],
          status: response.code
        }
      )
    end

  end

  private
  def application_details_params
    params.permit(:fullName, :email, :message, :website, :github, :linkedin, :testmode)
  end
end
