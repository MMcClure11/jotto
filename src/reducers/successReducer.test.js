import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default initial state of `false` when no action is passed', () => {
  const newState = successReducer(undefined, {});//have to pass in empty object or else your test will fail because cannot read .type of undefined
  expect(newState).toBe(false);
});
test('returns state true upon receiving an action type of `CORRECT_GUESS`', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});