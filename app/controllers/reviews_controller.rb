class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  before_action :authorize
  skip_before_action :authorize, only: [:index, :show]

def index
  if params[:product_id]
    product = Product.find(params[:product_id])
    review = product.reviews
  else
    review = Review.all
  end
  render json: review, include: :product
end

def show
  review = Review.find(params[:id])
  render json: review, include: :product
end

def create
  review = Review.create(review_params)
  render json: review, status: :created
end

def update
  review = Review.find(params[:id])
  review.update(review_params)
  render json: review
end

def destroy
  review = Review.find(params[:id])
  review.destroy
  head :no_content
end

private

def render_not_found_response
  render json: { error: "Review not found" }, status: :not_found
end

def review_params
  params.permit(:user_id, :product_id, :comment, :rating)
end

def authorize
  return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
end
end
