import React from 'react';
import {Linking} from 'react-native';

import DriverScreen from './DriverScreen';

const DriverScreenContainer = ({route}) => {
  const {givenName, familyName, dateOfBirth, nationality, url} = route.params;
  const fullName = `${givenName} ${familyName}`;

  const handleUrlPress = () => {
    Linking.openURL(url);
  };

  return (
    <DriverScreen
      infoUrl={url}
      name={fullName}
      dateOfBirth={dateOfBirth}
      nationality={nationality}
      onUrlPress={handleUrlPress}
    />
  );
};

export default DriverScreenContainer;
