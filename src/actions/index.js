import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  RESET_GAME: 'RESET_GAME',
  GIVE_UP: 'GIVE_UP',
  USER_ENTERING: 'USER_ENTERING',
  USER_ENTERED: 'USER_ENTERED',
  SERVER_ERROR: 'SERVER_ERROR',
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *     and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
*/
export const guessWord = (guessedWord) => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    };

  };
};

/**
 * Dispatch axios action to get the secret word from random server.
 * Separate this out so it can be used in getSecretWord and resetGame.
 * @function getSecretWordDispatch
 * @param {dispatch} dispatch - Redux Thunk dispatch.
 */

export const getSecretWordDispatch = (dispatch) => {
  return axios.get('http://localhost:3030')
    .then(response => {
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: response.data
      });
    });
};

/**
 * Action creator to reset game and get new word.
 * @function resetGame
 * @returns {function} - Redux Thunk function that dispatches RESET_GAME action and calls getSecretWord().
 */

 export const resetGame = () => {
   return (dispatch) => {
     dispatch({ type: actionTypes.RESET_GAME});
     return getSecretWord(dispatch)
   }
 }

 export const getSecretWord = () => {
   return getSecretWordDispatch;
 }