class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.integer :category_id
      t.integer :supplier_id
      t.string :labels
      t.string :img
      t.string :hoverImg
      t.boolean :inStock
      t.boolean :fastDelivery
      t.string :title
      t.integer :price
      t.string :group
      t.string :description
      t.integer :rating

      t.timestamps
    end
  end
end
