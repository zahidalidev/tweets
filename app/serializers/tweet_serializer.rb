class TweetSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :tweet_id, :likes_count, :retweet_count, :created_at, :updated_at

  def likes_count
    object.likes.count
  end

  def retweet_count
    Tweet.where(tweet_id: object.id).count
  end
end
