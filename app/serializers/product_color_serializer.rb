class ProductColorSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :product
  belongs_to :color
end
