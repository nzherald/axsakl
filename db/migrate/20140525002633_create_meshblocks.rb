class CreateMeshblocks < ActiveRecord::Migration
  def change
    create_table :meshblocks do |t|
      t.multi_polygon :shape, srid: 3857

      t.timestamps
    end
  end
end
