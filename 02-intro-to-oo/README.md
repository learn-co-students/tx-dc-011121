# Intro to Object Orientation

## Learning Objectives

- [ ] Define `object` in programming domain
- [ ] Explain the difference between a class and an instance
- [ ] Explain the concept of sending messages
- [ ] Create a class and instantiate an instance of the class
- [ ] Pass arguments to `new` by defining an initialize method in class
- [ ] Define attribute readers and writers using `attr_` macros
- [ ] Create instance methods
- [ ] Explain the need for variable scope and why it's important to not utilize global variables
- [ ] Call methods on the implicit or explicit `self`
- [ ] Determining execution context - are we "inside" or "outside" an object?
- [ ] Get more practice with array compositions (`each`, `map`, `select`/`filter`)

## Additional Objectives
- [ ] Gaining some intuition for the phrase "Everything is an object"
- [ ] Explain the differences between classes and objects
- [ ] Understand the difference between local variable and instance variable scope
- [ ] Know what method dispatch is and how it works

## Notes
- Whiteboard exercise  
  - left hand side: classes (at least 4)
  - right hand side: instances table

      | Classes | Instances |
      | -       | -         |
      | String  | "cookies" |
      | Symbol  | :example  |
      | Array   | [1,2,3]   |
      | Hash    | { key: 'val' } |
      | Integer | 10        |
      | Float   | 4.2       |

  ```rb
      ####
        2.+(2)
        2 + 2
      ####
        nums = [1,2,3]
        nums[0]
        nums.[](0)
      ####
        "testing" == "testing"
        "testing".==("testing")
      ####
      # How does ruby know to reverse a string?
        def example(data)
          data.reverse
        end
      ####
        x = "cookies"
        x.reverse => ???
      ####
  ```

- What are classes?
- Let's start by talking about the built in classes in Ruby.
  * All the data you've been working with is an instance of some class.
  * They're just _values_. What can we do with ruby values?
    * store them, pass them, return them, call methods on them
- Exciting revelation: almost _everything_ in ruby is a method call!
  * Questions to answer: what is a method call? what is a method chain?
  * Things to show: Weird syntax for addition, equality, indexing, `send`.

  #### Method Dispatch
  - A process that ruby uses to determine what code to run

  ```rb
    # What does ruby do when we run following code?
    x = "cookies"
    x == "test" # => Output?

    x.class # => String
    x.send(:==, "test") # => Sends a message
      # consult the class for definition
      # If not, check the ancestors => x.class.ancestors
    # Let it rip!
  ```
- Exciting revelation: We can get a list of methods an object supports!
    * `.methods` or,  my preference, `ls` in pry
- Bank account example: Why do we have classes? To organize code.
  - If our data changes, doesn't the way we have to interact with it too?
    * Might as well group those things together then.
- Graph memory for an empty instance, then getters and setters, then initialize.
  * _The only way to interact with an object is through its methods_. Full stop.
  * Whiteboard question: Are the args to `initialize` on line 2 local or instance vars?
  * Reminder: Local variables are thrown away/GC'd when you reach end of method.
  * Reminder: A method name cannot begin with an `@`.
  * Important takeaways:
    * Method arguments get stored in _local variables_ inside the method.
    * We "copy" local variables into instance variables because we want them
    * Instance variables are not visible from "outside" an object.
    * Objects can hold other objects in instance variables.
      * Of any type! .... Because everything is just an object!
- Make sure we have local var, method, and class in account. Can playground see?
- Write a method that takes another account as an argument. How to compare them?

## Deliverables

Here is a naive implementation of a bank account in Ruby using only a hash which stores key-value pairs.

```ruby
bank_account = {"user_id": 3, "balance": 100}
```

Write an implementation of a bank account that meets the following requirements:

- [ ] can print the balance of the account
- [ ] can deposit money into the account
- [ ] can withdraw money from the account
- [ ] keeps track of the account number
