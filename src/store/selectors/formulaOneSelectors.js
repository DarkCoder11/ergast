import {createSelector} from 'reselect';

export const selectState = (state) => state.formulaOne;

export const selectDrivers = createSelector(
  selectState,
  (formulaOneState) => formulaOneState.drivers,
);
