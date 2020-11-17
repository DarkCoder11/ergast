import {SET_IS_LOADING} from '../actions/loadingActions';

const initialState = {
  isLoading: true,
};

const loadingReducer = (state = initialState, {type, isLoading}) => {
  switch (type) {
    case SET_IS_LOADING:
      return {...state, isLoading};

    default:
      return state;
  }
};

export default loadingReducer;
