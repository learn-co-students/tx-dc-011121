require 'pry'
require './course'
require './student'

softwares = Course.new("SE",101,"3:00am Every week day")
data_science = Course.new("DS",102,"6:00pm Every week day")
math = Course.new("Math",103,"11:00am Once a week")

marc = Student.new("Marc",14,"A+")
shivang = Student.new("Shivang",14,"D-")
mansour = Student.new("Mansour",9,"A+")

shivang.enroll(data_science)
shivang.enroll(math)

marc.enroll(softwares)
mansour.enroll(softwares)

binding.pry
