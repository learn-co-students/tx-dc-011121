### new features
- When a user submits info into the form, we should see a wizard appear on the DOM and 
  POST-ed to the back end.
- The Make a Team Button will render the Team and Wizard Container
- Clicking on a wizard in the wizard container will cause it to render in the team container
- Clicking on a wizard in the team container will remove it from the container 
- Add a delete button

### new components 
- Wizard Form
- Team Container
- Wizard Container


### React Forms
Forms have default HTML behavior which directs to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components. 