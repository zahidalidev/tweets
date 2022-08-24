class Tweet < ApplicationRecord
  include Likeable

  belongs_to :user
end
