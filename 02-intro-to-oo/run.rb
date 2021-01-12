require 'pry'
require('./customer.rb')

marc = Customer.new("Marc",50000)
shivang = Customer.new("Shivang")
david = Customer.new("David",10000)

puts david.balance

binding.pry

# marc = { name: 'Marc', balance: 50000 }
# shivang = { name: 'Shivang', balance: 50 }
#
# def create_customer(name,balance)
#   return {
#     name: name,
#     balance: balance
#   }
# end
#
# def show_balance(customer)
#   puts "Balance for #{customer[:name]}: #{customer[:balance]}"
# end
#
# david = create_customer('David',10000)
#
# show_balance(david)
#
