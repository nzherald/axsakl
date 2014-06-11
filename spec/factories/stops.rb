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

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :stop do
  end
end
