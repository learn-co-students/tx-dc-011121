class StudentCourse

  attr_accessor :student, :course
  @@all = []

  def initialize(student,course)
    @student = student
    @course = course

    @@all << self
  end

  def self.delete(s_c)
    @@all = self.all.filter { |item| item != s_c }
  end

  def self.all
    @@all
  end

end
