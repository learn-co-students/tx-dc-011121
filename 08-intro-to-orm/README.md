## Intro to ORM(s)

## SWBATs

* Define Object Relational Mapper \(ORM\)
* Distinguish between ORM and SQL
* Demonstrate that ORMs are the pattern connecting scripting languages and databases
* Explain how the `sqlite` gem works as a driver or wrapper around SQL
* Implement HEREDOCs to be saved in variables to be executed by SQL driver
* Perform persistent CRUD actions on two separate models

### One to Many Relationship in SQL

* Foreign key versus primary key
* Which table is the foreign key placed on? \(has many or belongs to\)

### ORM Pattern

* each table in the db should correspond to our ruby class \(models\)
* each row represents an instance in the database
* each column represents an attribute for our instances
* why do we need a database? persistence
