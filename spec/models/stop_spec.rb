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

require 'spec_helper'

describe Stop do
  pending "add some examples to (or delete) #{__FILE__}"
end
