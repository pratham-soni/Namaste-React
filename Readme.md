# Namaste React

# IMP points-

- Speak while u code, for learning POV

# Parcel

- Dev build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Cashing - faster builds
- Image Optimization
- Minification
- Bundler
- Compressing
- Consistent Hashing
- Code Splitting
- Differential BundLing - support older browsers
- Diagnostic
- Error Handeling
- Support for HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Food Ordering App

- structure
  /\*

* Header
  - Logo
  - Nav-Items
* Body
  - Search
  - RestaurentContainer
    - RestaurentCard
      - img
      - name of res, star rating, cuisine etc, delivery time
* Footer
  - Copyright
  - Links
  - Address
  - Contact
    \*/

- hardcoded data

/_
id
resName
cuisines
avgRating
costForTwo
deliveryTime
_/

<!-- Named Export/Import -->

export const Component;
import {Component} from "path";

<!-- Default Export/Import -->

export default Component;
import Component from "path";

<!-- Hooks -->

# hooks are nothing but the Java Script Utility functions written by FaceBook Team in "react" package.

- useState()
  - Whenever a state variable updates, React will re-render the componenet
- useEffect()

## how is useEfefct called?--IMP

# second argument '[]' of this function is not mandatory

- 1. useEffect(()=> {}) :-without dependency array -> it will rander everytime my component re-randeres

- 2. useEffect(() => {}, []):- with empty dependency array -> it will be called only on ititial render of the component (only 1 time)

- 3. useEffect(() => {}, [listOFRestaurents]):- with value inside dependency array -> it will be called everytime value inside dependecy array changes (in this case 'listOfRestaurents' changes)

# Diff algorithm

- finds out the difference between new and old virtual dom after changing the state variable (using setter)

## React FIbre

- this came in react-16.
- this is new way of finding the diff and updating the dom.
- React is making efficient DOM manupulation

# Whenever the state variables changes, React will rerender the entire component accosiated with that state variable.

- whenever state variable updates, react triggeres the recounciliation cycle, (rerenders the component)

# Routing

- Never use <a> ancher tag </a> "<a>" in react project outher wise while routing via ancher ta, it will reload the entire page
- instead use Link component <Link><Link/> component provided by "react-router-dom"
- that's why react applications are known as SPA (single page applications)
- while using Link whole page is not reloaded but we are only rendering the component based on path.

## Two Types of routing web apps

- Client side Routing (using <Link> componenet in react)
- Server side Routing (using <a> tag in react)

# !!! never compare the react lifecycle methods to functional components !!!

# Lazy Loading

- chunking
- lazy loading
- initialy we will not load grocery, when we will go to grocery page, will load it
- on demand loading
- dynamic loading

# Higher Order function

- function that takes a component and returns a component

# Lifting State Up

- Resource: https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example
- Remove state from the child components.
- Pass hardcoded data from the common parent.
- Add state to the common parent and pass it down together with the event handlers.

# Redux Toolkit

- Install @redux/toolkit and react-redux
- Build our own store
- Connect our store toour app
- Slice (CardSlice)
- Dispatch (action)
- Selector

# Types of Testing (Developer Testing)

- Unit testing
- Integration testing
- E2E testing

...

# setup testing in app

- install react testing library
- install jest
- installed babel dependicies required whne we use jest with babel
- configure babel (added babel.config.js)
- configure parcelrc config to basicaly disable babel default transpilation
- jest configuration ( npx jest --init)
- install jsdom library (npm install --save-dev jest-environment-jsdom)
- regx -> **/**tests**/**/_.[jt]s?(x), \*\*/?(_.)+(spec|test).[tj]s?(x)
- which means below can be defined as test file
  <!-- - either u create a test file under __tests__ -->
  <!-- - or u can create and file with below extentions -->
  - Headers.test.js
  - Headers.test.ts
  - Headers.spec.js
  - Headers.spec.js
- install @babel/preset-react => to make JSX work in test cases
- include @babel/preset-react inside my babel config
- Include a library to avoid this error, "expect(...).toBeInTheDocument is not a function"
  - @testing-library/jest-dom

<!-- "__" dunder test -->

- we can use as a reserved word for dunders
