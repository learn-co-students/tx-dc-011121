require 'pry'
require './person'
require './tweet'


david = Person.new("David",24,1000)
chip = Person.new("Chip",24,500)
khalin = Person.new("Khalin",24,10000)

david.post_tweet("first tweet")
khalin.post_tweet("Don't quite understand but seems cool..")
# tweet1 = Tweet.new("First tweet ever",david)
# tweet2 = Tweet.new("Things are getting interesting..",chip)
# tweet3 = Tweet.new("This doesn't work..",khalin)


# tweets posted by khalin

binding.pry
