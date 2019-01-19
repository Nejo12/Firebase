React/Firebase application. It is a real-time application with the use of Firebase to manage the backend including the extensive authentication and authorization, and deployment.

In place of using third party state management library, global state is utilized. Since the application is made under the umbrella of App component, it’s sufficient to manage the session state in the App component using React’s local state. App component keep track of an authenticated user (session). If a user is authenticated (e.g Navigation), store it in the local state and pass the authenticated user object down to all components that are interested in it. Otherwise, pass the authenticated user down as null (e.g Signout).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
