class SitesController < ApplicationController
  layout 'spa'

  def index
    render template: 'layouts/spa'
  end
end
