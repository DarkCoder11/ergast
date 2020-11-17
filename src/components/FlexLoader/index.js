import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {colors, commonStyleSheet} from '../../styles';

const FlexLoader = () => (
  <View style={commonStyleSheet.containerJustifyCenter}>
    <ActivityIndicator color={colors.primary} size="large" />
  </View>
);

export default FlexLoader;
