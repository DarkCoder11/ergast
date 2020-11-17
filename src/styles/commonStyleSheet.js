import {StyleSheet} from 'react-native';

import {sizes} from './index';

const commonStyleSheet = StyleSheet.create({
  paddingHorizontalContainer: {
    flex: 1,
    paddingHorizontal: sizes.horizontalPadding,
  },
  containerJustifyCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    overflow: 'hidden',
    flexDirection: 'row',
  },
});

export default commonStyleSheet;
