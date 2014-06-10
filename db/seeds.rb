# Import data using the CSV library

require 'csv'

if Stop.count.zero?
  CSV.foreach(Rails.root.join('db', 'seeds', 'stops.csv'), headers: true) do |attrs|
    Stop.create!(code: attrs['stop_code'],
                 name: attrs['stop_name'],
                 coordinates: "POINT(#{attrs['stop_lon']} #{attrs['stop_lat']})")
  end
end

if DeprivationScore.count.zero?
  CSV.foreach(Rails.root.join('db','seeds','deprivation_index.csv'), headers: true) do |attrs|
    DeprivationScore.create(meshblock_id: attrs['meshblock_id'],
                            deprivation_index: attrs['deprivation_index'],
                            deprivation_scores: attrs['deprivation_scores'])
  end
end

if Meshblock.count.zero?

  files = Dir[Rails.root.join 'vendor', 'assets', 'bower_components',
           'simplified_meshblock_geojson', 'meshblocks', '*.json']

  files.each do |file|
    puts "Importing #{file}"
    contents = JSON.parse File.read file
    next unless contents['features'].first['properties']['TA2014'].to_i == 76

    begin
      Meshblock.create(id: contents['features'].first['properties']['MB2014'].to_i,
                     shape: RGeo::GeoJSON.decode(contents['features'].first['geometry'], json_parser: :json))
    rescue Exception => e
      puts e
    end

  end

end

