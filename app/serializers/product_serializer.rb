class ProductSerializer < ActiveModel::Serializer
  attributes :id, :img, :inStock, :fastDelivery, :title, :labels, :price, :group, :description, :rating
 

  belongs_to :supplier
  belongs_to :category
  has_many :reviews
  has_many :users, through: :reviews
  has_many :product_colors
  has_many :colors, through: :product_colors
end
