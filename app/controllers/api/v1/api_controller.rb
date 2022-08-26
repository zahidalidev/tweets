# frozen_string_literal: true

module Api
  module V1
    class ApiController < ApplicationController
      before_action :authenticate_user!
      skip_before_action :verify_authenticity_token

      layout 'spa'
    end
  end
end
