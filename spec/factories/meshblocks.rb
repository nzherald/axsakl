# == Schema Information
#
# Table name: meshblocks
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#  shape      :spatial          geometry, 0
#

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :meshblock do
    
  end
end
