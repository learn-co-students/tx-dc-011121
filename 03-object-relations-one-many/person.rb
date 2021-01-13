class Person

  attr_reader :name, :age, :tweets
  attr_accessor :happiness

  @@all = []

  def initialize(name,age,happiness)
    @name = name
    @age = age
    @happiness = happiness
    @tweets = []

    @@all << self
  end

  def post_tweet(content)
    tweet = Tweet.new(content,self)
    @tweets << tweet
  end

  # def times_two(num)
  #   num * 2
  # end
  #
  # def double(num)
  #   times_two
  # end

  def self.all
    @@all
  end

  def self.find_person

  end

  # def age
  #   @age
  # end
  #
  # def age=(random)
  #   @age = random
  # end

end
