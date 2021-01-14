class Course

  attr_accessor :time

  @@all = []
  # @@times = []

  def initialize(title,room_no,time)
    @title = title
    @room_no = room_no
    @time = time

    # @@times << time
    @@all << self
  end

  def self.all
    @@all
  end

  def students

  end

end
