class Api::V1::TweetsController < Api::V1::ApiController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    render json: @tweets, status: :ok
  end

  def create
    @tweet = Tweet.new(tweet_params)
    @tweet.user = current_user

    if @tweet.save
      render json: 'Tweet saved successfully', status: :ok
    else
      render json: 'Cannot create tweet'
    end
  end

  def show
    @tweet = Tweet.find_by(id: params[:id])

    return render json: 'tweet not found', status: 404 unless @tweet.present?

    render json: @tweet, status: :ok
  end

  def retweet
    @tweet = Tweet.find(params[:id])

    @retweet = current_user.tweets.new(tweet_id: @tweet.id)

    if @retweet.save
      render json: 'Retweeted successfully', status: :ok
    else
      render json: 'unable to retweet', status: 422
    end
  end

  def destroy
    @tweet = current_user.tweets.find_by(id: params[:id])
    if @tweet.destroy
      render json: 'tweet destroyed successfully', status: :ok
    else
      render json: 'cannot destroy tweet', status: 422
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:body, :tweet_id)
  end
end
