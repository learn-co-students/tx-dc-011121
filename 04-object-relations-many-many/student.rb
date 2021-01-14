class Student

  attr_reader :name, :age, :grade, :courses
  @@all = []

  def initialize(name,age,grade)
    @name = name
    @age = age
    @grade = grade

    @courses = []

    @@all << self
  end

  def enroll(course)
    @courses << course
  end

  def self.all
    @@all
  end

end
