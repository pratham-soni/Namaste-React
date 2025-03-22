# Namaste React

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
