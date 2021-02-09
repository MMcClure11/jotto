export const actionTypes= {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESSED_WORD: 'GUESS_WORD'
};

/**
 * Returns Redux THunk function that dispatches GUESS_WORD action 
 *  and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = (guessedWord) => {
  return function(dispatch, getState) {

  };
};