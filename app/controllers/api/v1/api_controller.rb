# frozen_string_literal: true

module Api
  module V1
    class ApiController < ApplicationController
      # before_action :authenticate_user!

      layout 'spa'
    end
  end
end
