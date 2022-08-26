class Api::V1::LikesController < Api::V1::ApiController
  before_action :set_likeable

  def create
    if @likeable.likes.count >= 1 && @likeable.liked_by?(current_user)
      @like = Like.find_by(likeable_id: @likeable.id, user: current_user)
      @like.destroy
      render json: 'Tweet unliked', status: 200
    else
      @like = @likeable.likes.new
      @like.user = current_user
      @like.save
      render json: 'Tweet liked', status: 200
    end
  end

  private

  def set_likeable
    @likeable = params[:likeable_type].constantize.find(params[:likeable_id])
  end
end
