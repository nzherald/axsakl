class CreateDeprivationScores < ActiveRecord::Migration
  def change
    create_table :deprivation_scores do |t|
      t.integer :meshblock_id
      t.integer :deprivation_index
      t.integer :deprivation_scores

      t.timestamps
    end
  end
end
