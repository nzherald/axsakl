class CreateStops < ActiveRecord::Migration
  def change
    create_table :stops do |t|
      t.integer :code
      t.string :name
      t.point :coordinates, geographic: true

      t.timestamps
    end
  end
end
