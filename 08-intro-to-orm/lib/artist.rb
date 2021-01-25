class Artist < ActiveRecord::Base

  # attr_reader :id, :name
  #
  # def initialize(id,name)
  #   @id = id
  #   @name = name
  # end
  #
  def self.create(name)
    query = "INSERT INTO artists(name) VALUES (\"#{name}\")"
    DB[:conn].execute(query)
  end
  #
  def self.all
    @artists = DB[:conn].execute("SELECT * FROM artists")
    @artists.map do |artist|
      Artist.new(artist["id"],artist["name"])
    end
  end
  #
  # def self.find(id)
  #   self.all.find { |artist| artist.id == id }
  # end

end
