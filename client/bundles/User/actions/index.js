import { CLICK_START, CHOOSE_DAY, SUBMIT_JOURNAL } from './types';

export const clickStart = () => {
  return {
    type: CLICK_START
  };
};

export const chooseDay = day => {
  return {
    type: CHOOSE_DAY,
    day
  };
};

export const submitJournal = entry => {
  return {
    type: SUBMIT_JOURNAL,
    entry
  };
};
