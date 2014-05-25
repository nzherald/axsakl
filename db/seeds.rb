# Import data using the CSV library

require 'csv'

if Stop.count.zero?
  CSV.foreach(Rails.root.join('db', 'seeds', 'stops.csv'), headers: true) do |attrs|
    Stop.create!(code: attrs['stop_code'],
                 name: attrs['stop_name'],
                 coordinates: "POINT(#{attrs['stop_lon']} #{attrs['stop_lat']})")
  end
end

CSV.foreach(Rails.root.join('db','seeds','mb2013.csv'), headers: true) do |attrs|
    DeprivationScore.create(meshblock_id: attrs['meshblock_id'],
                             deprivation_index: attrs['deprivation_index'],
                             deprivation_scores: attrs['deprivation_scores'])
end
