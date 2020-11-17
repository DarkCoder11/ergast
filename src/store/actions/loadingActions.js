import {buildActionType} from '../../utils';

export const SET_IS_LOADING = buildActionType('loading', 'SET_IS_LOADING');

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  isLoading,
});
