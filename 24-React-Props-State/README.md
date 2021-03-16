# React Props & State

## Objectives
- [ ] Idea of components
- [ ] Declarative vs Imperative Programming
- [ ] Passing values to components
- [ ] Changing the values?

### Review
- What is a component?
- Declarative vs Imperative
- Component Hierarchy

### Props
You can pass anything in props, even functions! We will often find ourselves passing functions down to children components - this is because while we might need state in one part of our application, our event listener might be attached to an entirely different component. To get around this, we define our state-changing functions in a component and then pass these functions downwards to be called by children components.

### State
State is used for data that needs to be dynamic. Where props are passed down from parents to children and are static, values stored in state are meant to change, especially as the user interacts with the DOM.

This is a key component of declarative programming in React: we tie our components to our state by integrating values in state into logic (e.g. conditional rendering). This way, changes in state eventually precipitate changes to the DOM

`setState` is a function inherited from `React.Component` and is used to change state. You MUST use setState if you wish to re-render your component - direct mutations to state will NOT trigger a re-render.

`setState` is asynchronous - this means that code written immediately after a setState will not see changes in your state. If you wish to call a function after state has been changed, you can pass a callback as the second argument to setState

`setState` can take an object OR a function as its first argument. Use the function when you intend to use the old state values when writing the new state values.

### Code

```html
    <header>
      <h2>Pokemon Teams!</h2>
    </header>

    <main>
      <!-- Add our Pokemon -->
    </main>
```
