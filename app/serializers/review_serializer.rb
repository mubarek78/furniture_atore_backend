class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :reviewed_at, :comment, :rating
belongs_to :product
belongs_to :user
end
