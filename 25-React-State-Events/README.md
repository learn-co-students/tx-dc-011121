# React State and Events

In this lecture we will learn how to 
- [ ] Define event-listeners in React
- [ ] Define callback functions that manipulate state  
- [ ] Pass callbacks and state to the components that need them as props
- [ ] Define Conditional Rendering

=================================================================

Our apps user stories:
- [ ] As a user, when I click “see the wizards” It should render the SearchContainer Component
- [ ] The Search Container should render all the wizards
- [ ] When I click the navbar brand it should render the Home page again 
- [ ] when I type text into the input field I should only see cards that match the criteria I've defined 

### Review
- How do we pass data from one component to another?
- When should we define state? Where?
- What is Component Hierarchy?

## Thinking in React
Throughout phase 4 we will be iterating over the ["thinking in react"](https://reactjs.org/docs/thinking-in-react.html) process. This will be especially helpful in giving you a framework to approach conceptualizing and developing a react application.

### 1.) Start with a mock
On the job, when you receive a task such as "create a component for x" you will often receive a design along with the specs. Equally important as the visual mock ups, are the data mock ups. It is extremely prudent to have a clear understanding of what kind of data your component will be consuming before development.

### 2.) Break up the mock into it's component hierarchy
A component, like a function, should ideally be responsible for one thing. Use your mocks and user stories to determine what your components should be, and pay special attention to the parent child and sibling relationships between them. 

### 3.) Build out a static version in React
After establishing and organizing your components, demonstrate their relationships by creating static versions of them. Here would be a great place to use your mock data. With it, it is much easier work out how you would like your components to display that data. Adding interactivity should come later. It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing.

### 4.) Identify the most minimal and complete form of UI state
To make the UI interactive we have to make changes to the underlying data model, and React achieves this through state. If there is some aspect of the UI that will change over time during use, we should represent that in state. Always ask yourself these questions:  Does it remain unchanged over time? Can you compute it based on any other state or props in your component? If so, it isn’t state.

### 5.) Identify where that state should live
Now that we have identified what we want our state to look like, we should now identify where we want that state to live. A good place to start is to identify all of the components that rely on state to render something to the UI and find a common component that houses all of them. If you can't find one that makes sense, feel free to create a component for the sole purposes of housing other components and state. 

### 6.) Add inverse data flow
We can achieve this simply by passing state manipulating callbacks from our parent containers that house the state, to the child components that actually use the callbacks. When the callbacks are triggered, the data (change in state) fires back up the chain causing the relevant components to re-render and reflect their new state.
