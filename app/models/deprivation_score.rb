# == Schema Information
#
# Table name: deprivation_scores
#
#  id                 :integer          not null, primary key
#  meshblock_id       :integer
#  deprivation_index  :integer
#  deprivation_scores :integer
#  created_at         :datetime
#  updated_at         :datetime
#

class DeprivationScore < ActiveRecord::Base
end
