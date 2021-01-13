class Tweet

  attr_reader :content, :person

  @@all = []

  def initialize(content,person)
    @content = content
    @person = person

    @@all << self
  end

  def self.all
    @@all
  end

end
