import {setIsLoading} from './loadingActions';

import {axiosInstance} from '../../libs';
import {buildActionType, notifyMessage} from '../../utils';

export const SET_DRIVERS = buildActionType('formulaOne', 'SET_DRIVERS');

export const setDrivers = (drivers) => ({
  type: SET_DRIVERS,
  drivers,
});

export const getDrivers = (params) => async (dispatch, getState) => {
  const {items} = getState().formulaOne.drivers;

  if (!items.length) {
    dispatch(setIsLoading(true));
  }

  try {
    const {data} = await axiosInstance.get('/drivers.json', {
      params,
    });
    const {
      total,
      DriverTable: {Drivers: items},
    } = data.MRData;

    dispatch(
      setDrivers({
        items,
        total: Number(total),
      }),
    );
    dispatch(setIsLoading(false));
  } catch ({message}) {
    notifyMessage(message);
    dispatch(setIsLoading(false));
  }
};
