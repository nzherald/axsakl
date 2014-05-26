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
  # Make a tmp folder in the Rails root if it does not exist
  # tmp is ignored by the .gitignore file, so not checked in
  # to git

  FileUtils.mkdir_p Rails.root.join 'tmp'
  meshblock_csv_path = Rails.root.join 'tmp', '1_meshblock_geometries.csv'

  if File.exists? meshblock_csv_path
    CSV.foreach(meshblock_csv_path, headers: true) do |attrs|
      next unless attrs['territorial_authority_id'].to_i == 76
      Meshblock.create(id:    attrs['id'],
                       shape: attrs['shape'])
    end
  else
    raise 'Please download http://s3-ap-southeast-2.amazonaws.com/censusnz/1_meshblock_geometries.csv and put it in the tmp/ folder'
  end

end

