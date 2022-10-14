## Introduction to common React libraries

### State Management

#### Recoil (http://recoiljs.org)

- Url path: /recoil
- Code path: /learningAreas/stateManagement/recoil
- The relevant parts of the code are commented

Recoil is a state management library for React through the usage of hooks (kind of similar to useState).
A use-case for Recoil would be when you need to store persistent data that is used across multiple
components (e.g. a list of available products or user).
It's a simpler alternative to Redux and is recommended for less complex projects.

Don't forget that RecoilRoot has to encapsulate any components which will use any recoil hooks (See /RecoilPage).

#### Context (https://reactjs.org/docs/context.html, https://reactjs.org/docs/hooks-reference.html#usecontext)

- Url path: /context
- Code path: /learningAreas/stateManagement/context
- The relevant parts of the code are commented

Context is the built-in way to pass data between components without having to send it as props. It can be useful in simpler apps where the shared data doesn't have to be updated from child components. Adding setter functionality increases the complexity making external libraries a better option.

#### Redux (https://redux.js.org)

TBA

### Other

#### React Hook Form (https://react-hook-form.com)

TBA

## Run the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
