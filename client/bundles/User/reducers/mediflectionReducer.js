import { SUBMIT_JOURNAL } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SUBMIT_JOURNAL:
      return action.payload || false;
    default:
      return state;
  }
}
