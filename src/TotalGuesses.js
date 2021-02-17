import React from 'react'

const TotalGuesses = (props) => {
  return(
    <h4 data-test="component-total-guesses">
      Total Guesses: {props.guessCount}
    </h4>
  );
};

export default TotalGuesses;