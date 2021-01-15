class Course

  attr_accessor :title, :time, :students

  @@all = []

  def initialize(title,room_no,time)
    @title = title
    @room_no = room_no
    @time = time

    # @students = []

    @@all << self
  end

  def students
    s_c = StudentCourse.all.select { |item| item.course == self }
    s_c.map { |item| item.student.name }
  end

  def self.all
    @@all
  end

end
