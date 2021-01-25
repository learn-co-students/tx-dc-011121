require 'bundler'
Bundler.require
#
# DB = {
#   conn: SQLite3::Database.new('db/chinook.db')
# }
#
# DB[:conn].results_as_hash = true

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'db/chinook.db'
)


require_relative '../lib/artist'
require_relative '../lib/album'
