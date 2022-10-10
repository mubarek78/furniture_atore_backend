class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end


# t.integer :user_id
# t.integer :product_id
# t.datetime :reviewed_at
# t.text :rev

# control
# rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

# def index
#   reviews = Review.all
#   render json: reviews, include: :product
# end

# def show
#   review = Review.find(params[:id])
#   render json: review, include: :product
# end

# def create
#   review = Review.create(review_params)
#   render json: review, status: :created
# end

# private

# def render_not_found_response
#   render json: { error: "Review not found" }, status: :not_found
# end

# def review_params
#   params.permit(:user_id, :product_id, :rev, :rating)
# end

# model
# belongs_to :product
# belongs_to :user


# Serializer
# attributes :id, :user_id, :product_id, :reviewed_at, :rev

# belongs_to :product
# belongs_to :user

# modelrails g resource Review user_id:integer product_id:integer reviewed_at:date  comment rating:integer --no-test-framework