import {Platform} from 'react-native';

const isIos = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

const platform = {
  isIos,
  isAndroid,
};

export default platform;
