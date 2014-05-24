class CreateStops < ActiveRecord::Migration
  def change
    create_table :stops do |t|
      t.integer :code
      t.string :name
      t.point :coordinates
      t.boolean :has_structure

      t.timestamps
    end
  end
end
