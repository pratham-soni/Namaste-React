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
