class PagesController < ApplicationController
  def index
  end

  def test
  	render(
      json: {
        message: 'Test status code',
        status: 400
      }
    )
  end
end
