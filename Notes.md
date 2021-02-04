2/4/2021

npx create-react-app jotto not supported
went to the docs and tried 
  yarn create react-app jotto and it seems to have worked

add dependencies

Note: using create-react-app uses react vs 17 but the official adapter is not out yet
in the meantime you can use the unofficial version by running this command:

yarn add --save-dev enzyme jest-enzyme @wojtekmaj/enzyme-adapter-react-17

and importing the below anytime the course imports enzyme-adapter-react-16

import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

yarn add --save-dev enzyme returns missing list of packages to add to project error
yarn add enzyme worked 

New committing command: git commit -am "New commit"

/** 
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */

 these are js docs that the instructor likes to include in most files