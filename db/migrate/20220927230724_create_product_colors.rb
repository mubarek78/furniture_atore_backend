class CreateProductColors < ActiveRecord::Migration[7.0]
  def change
    create_table :product_colors do |t|
      t.belongs_to :product, null: false, foreign_key: true
      t.belongs_to :color, null: false, foreign_key: true

      t.timestamps
    end
  end
end
