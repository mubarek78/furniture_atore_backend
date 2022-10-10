class ColorSerializer < ActiveModel::Serializer
  attributes :id, :color_name

  has_many :products, through: :product_color
end
