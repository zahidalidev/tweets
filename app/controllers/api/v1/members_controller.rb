class Api::V1::MembersController < ApplicationController

  layout 'spa'
  def index
  end

  def show

    render template: 'layouts/spa'

  end
end
