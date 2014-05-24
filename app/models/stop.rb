# == Schema Information
#
# Table name: stops
#
#  id          :integer          not null, primary key
#  code        :integer
#  name        :string(255)
#  coordinates :spatial          point, 4326
#  created_at  :datetime
#  updated_at  :datetime
#

class Stop < ActiveRecord::Base
  def as_json(options = {})
    {
      id: id,
      code: code,
      name: name,
      coordinates: RGeo::GeoJSON.encode(coordinates)
    }
  end
end
