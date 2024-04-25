# ESLint Plugin: No Deep Property Access

## Overview

This ESLint plugin helps identify and address deep property accesses in JavaScript code. It highlights potentially problematic deep property accesses and suggests using optional chaining to improve code robustness.

## Features

- **Warning Messages**: Emit warning messages for deep property accesses without optional chaining.
- **Suggested Fixes**: Provide suggestions for using optional chaining to safely access nested properties.
- **Future Support**: Planned support for error messages and automatic fixes.

## Example

Consider the following JavaScript code snippet:

```javascript
const user = {
    firstName: 'Tom',
    address: 'US'
};

console.log(user.firstName.toUpperCase()); // Warning: Consider using optional chaining instead of accessing properties with more than two dots.


Install the plugin using npm or yarn:

npm install eslint-plugin-no-deep-property-access --save-dev

yarn add eslint-plugin-no-deep-property-access --dev

Configure ESLint to use the plugin in your ESLint configuration file (e.g., .eslintrc.js):

```javascript
// .eslintrc.js
module.exports = {
  plugins: ["no-deep-property-access"],
  rules: {
    "no-deep-property-access/no-deep-property-access": "warn"
  }
};

Run ESLint in your project to lint your JavaScript files and identify deep property access issues:
or can also use .eslintrc.json file for the same


Example
Consider the following JavaScript code snippet:

javascript
Copy code
const user = {
    firstName: 'Tom',
    address: 'US'
};

console.log(user.firstName.toUpperCase()); // Warning: Consider using optional chaining instead of accessing properties with more than two dots.
In this example, the plugin would emit a warning message for the console.log statement, suggesting the use of optional chaining to safely access the firstName property of the user object.

with optional chain:
console.log(user?.firstName?.toUpperCase());
Contributing

License
This ESLint plugin is licensed under the MIT License.

