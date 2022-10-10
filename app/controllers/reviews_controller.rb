class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

# def index
#   reviews = Review.all
#   render json: reviews, include: :product
# end

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

private

def render_not_found_response
  render json: { error: "Review not found" }, status: :not_found
end

def review_params
  params.permit(:user_id, :product_id, :comment, :rating)
end
end
