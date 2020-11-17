import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import DriversTableScreen from './DriversTableScreen';

import {routes} from '../../constants';
import {FlexLoader} from '../../components';
import {formulaOneActions} from '../../store/actions';
import {formulaOneSelectors, loadingSelectors} from '../../store/selectors';

const DriversTableScreenContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const drivers = useSelector(formulaOneSelectors.selectDrivers);
  const isLoading = useSelector(loadingSelectors.selectIsLoading);
  const prevDisabled = offset === 0;
  const nextDisabled = offset + 30 >= drivers.total;

  const handleGetDrivers = (params) => {
    dispatch(formulaOneActions.getDrivers(params));
  };

  useEffect(() => {
    handleGetDrivers();
  }, []);

  if (isLoading) {
    return <FlexLoader />;
  }

  const handlePagination = (isPrev) => {
    const nextOffset = offset + 30;
    const prevOffset = offset - 30;
    const updatedOffset = isPrev ? prevOffset : nextOffset;

    setOffset(updatedOffset);
    handleGetDrivers({offset: updatedOffset});
  };

  const handlePrevPress = () => {
    handlePagination(true);
  };

  const handleNextPress = () => {
    handlePagination();
  };

  const handleNamePress = (item = {}) => {
    navigation.navigate(routes.DRIVER_SCREEN, {
      ...item,
    });
  };

  return (
    <DriversTableScreen
      drivers={drivers.items}
      prevDisabled={prevDisabled}
      nextDisabled={nextDisabled}
      onNextPress={handleNextPress}
      onPrevPress={handlePrevPress}
      onNamePress={handleNamePress}
    />
  );
};

export default DriversTableScreenContainer;
