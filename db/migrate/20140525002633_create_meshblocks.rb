class CreateMeshblocks < ActiveRecord::Migration
  def change
    create_table :meshblocks do |t|
      t.geometry :shape

      t.timestamps
    end
  end
end
