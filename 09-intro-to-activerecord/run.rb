require_relative './config/environment'

# def show_all_users
#   User.all.each { |user| puts user.username }
# end
#
# puts "Welcome to Someapp"
#
# show_all_users
#
# khalin = User.all.first
# david = User.all.second
# marc = User.all.last
#
#
# post1 = Post.all.first
#
# binding.pry


AppCLI.new.call
