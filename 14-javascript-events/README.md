# Event Listeners

## Asynchronous vs Synchronous?

## Review the Execution Stack, Event Queue, Event Loop

- example: setTimeout(function(){console.log("hello one second later")}, 1000)
- example: setTimeout(function(){console.log("hello right away")}, 0)
- events are asynchronous

## node.addEventListener() on a DOM node

- takes in a string for the name of the event, and a callback function to be invoked when the event happens
- (optional) argument for the callback is the event itself

## Example of Events

hoverover,
clicks,
load,
submits,

## When to add an event Listener

- on load of page?
- on creation of element?

## Practice

- When click of name -> "say hi to a pokemon"
- When click of submit -> add new pokemon
- When click of row -> "remove a row"

## Some events have default behavior

- event.preventDefault()

## event.currentTarget vs. event.target

- event.currentTarget: the HTML element addEventListener is attached to
- event.target: the innermost node that triggers the event

## Additional Resources

- More about how async works with the stack: https://www.youtube.com/watch?v=8aGhZQkoFbQ
