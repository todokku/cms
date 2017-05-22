begin
  MODELS = ActiveRecord::Base.connection.tables.sort.map do |name|
    name
      .classify
      .gsub('ArInternalMetadatum', 'ActiveRecord::InternalMetadata')
      .gsub('DelayedJob', 'Delayed::Job')
      .gsub('SchemaMigration', 'ActiveRecord::SchemaMigration')
      .gsub('Version', 'PaperTrail::Version')
      .constantize
  end

  MODELS.map(&:new) # Used to load all SchemaPlus data before any requests are made
rescue ActiveRecord::NoDatabaseError
  STDOUT.puts 'Database not yet created'
end
