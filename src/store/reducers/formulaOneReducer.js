import {SET_DRIVERS} from '../actions/formulaOneActions';

const initialState = {
  drivers: {
    items: [],
    total: 0,
  },
};

const formulaOneReducer = (state = initialState, {type, drivers}) => {
  switch (type) {
    case SET_DRIVERS:
      return {...state, drivers};

    default:
      return state;
  }
};

export default formulaOneReducer;
