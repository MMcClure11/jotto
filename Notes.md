2/4/2021 (2.5 hours)

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

 yarn add prop-types (the instructor used npm install --save prop-types but that command did not work for me with the yarn add --save)
 yarn add check-prop-types (again using the flag --save-dev didn't work for me)

 'does not throw warning with expected props' to see test fail turn false to a string
 warning about using defaultProps in your setup, if you change them, you might get falsely passing tests so be sure to check where else in your code you need to change your props

 ---Summary of Abstractions---
 findByTestAttr in test/testUtils.js
 checkProps in test/testUtils.js
 Did not abstract setup()
  too different for each component
Enzyme adapter in setupTests.js
Caution: too many abstractions = hard-to-read tests
  less useful in diagnosing failing tests

  2/10/2021
  to play the game and access the random word server:
  cd udemy-Enzyme
  cd random-word-server
  yarn start
  navigate to localhost:3030

  2/17/21
  Challenge #1: Number of Guesses
    [X]Add 'guess number' column to the 'Guessed Words' table
    [X] Add a component that displays the total guess
    [X] Use only existing state
  2/18/21
  Challenge #2: Reset Game
    [] Add a "New Word" Button
    [] Display after successful guess
    [] Reset the game with a new word from the server
    [] Use connected component (tests will be very similar to input and guessedWord)