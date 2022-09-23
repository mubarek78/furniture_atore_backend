class ProductSerializer < ActiveModel::Serializer
  attributes :id, :inStock, :fastDelivery, :title, :labels, :price 

  belongs_to :supplier
  belongs_to :categorie
end
