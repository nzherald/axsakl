require 'csv'

CSV.foreach(Rails.root.join('db','seeds','mb2013.csv'), headers: true) do |attrs|
    DeprivationScore.create(meshblock_id: attrs['meshblock_id'],
                             deprivation_index: attrs['deprivation_index'],
                             deprivation_scores: attrs['deprivation_scores'])
end

