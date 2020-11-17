import {createSelector} from 'reselect';

export const selectState = (state) => state.loading;

export const selectIsLoading = createSelector(
  selectState,
  (loadingState) => loadingState.isLoading,
);
