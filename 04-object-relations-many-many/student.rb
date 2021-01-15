class Student

  attr_reader :name, :age, :grade
  @@all = []

  def initialize(name,age,grade)
    @name = name
    @age = age
    @grade = grade

    # @courses = []

    @@all << self
  end

  def enroll(course)
    # @courses << course
    # course.students << self
    s_c = StudentCourse.new(self,course)
  end

  def courses
    s_c = StudentCourse.all.select { |item| item.student == self }
    s_c.map { |item| item.course.title }
  end

  def drop(course)
    s_c = StudentCourse.all.find { |item| item.student == self && item.course == course }
    StudentCourse.delete(s_c)
    # @courses = self.courses.filter { |item| item != course }
  end

  def self.all
    @@all
  end

end
