import { combineReducers } from 'redux';
import mediflectionReducer from './mediflectionReducer';
import { reduxForm } from 'redux-form';

export default combineReducers({
  mediflection: mediflectionReducer
});
