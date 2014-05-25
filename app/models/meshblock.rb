# == Schema Information
#
# Table name: meshblocks
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#  shape      :spatial          multipolygon, 3857
#

class Meshblock < ActiveRecord::Base
  def as_json(options = {})
    {
      id: id,
      shape: RGeo::GeoJSON.encode(shape)
    }
  end
end
