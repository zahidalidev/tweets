class TweetSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :tweet_id, :created_at, :updated_at
end
