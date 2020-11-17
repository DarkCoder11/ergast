import React from 'react';
import {View} from 'react-native';

import {commonStyleSheet} from '../../styles';

const HorizontalLayout = ({children, style}) => (
  <View style={[commonStyleSheet.paddingHorizontalContainer, style]}>
    {children}
  </View>
);

export default HorizontalLayout;
