# == Schema Information
#
# Table name: meshblocks
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#  shape      :spatial          multipolygon, 3857
#

require 'spec_helper'

describe Meshblock do
  pending "add some examples to (or delete) #{__FILE__}"
end
