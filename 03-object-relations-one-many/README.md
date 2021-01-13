## Hello!

## Recap

Brief recap! Yesterday we saw:

* Classes
* Instances
* Methods
* Instance Variables
* attr_ macros
* self

[how's your brain feelin?](https://camo.githubusercontent.com/8686c5147a4b736241bc598f0b7531220d58688b/687474703a2f2f692e696d6775722e636f6d2f3461573879617a2e676966)

## Today

Cool! Next we're going to:

* Dive deeper into self
* Practice inferring method type (class or instance) through naming conventions
* Implement one object to many objects relationship
  * One object has many objects
  * One object belongs to another object
* Demonstrate single source of truth
  * Implemented with a pattern that uses class variables and class methods
  * Note: These are _basically_ global state since classes have global scope.
  * Global state is frowned upon, but a good stand-in til we reach DBs next week


# Twitter Clone

## Deliverables

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username
  * `#username` reader method
  * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
  * `#tweets` that returns an array of Tweet instances

* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet#username` that returns the username of the tweet's user
  * `Tweet.all` that returns all the Tweets created.

Some questions:

* Who is in charge of knowing about the relationship between a user and a tweet?
  * What do we do if there are two owners with the same name?
  * Is there a way we can we tell them apart or make them unique?
