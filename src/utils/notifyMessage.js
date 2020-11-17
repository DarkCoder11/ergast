import {ToastAndroid, Alert} from 'react-native';

import platform from './platform';

const notifyMessage = (msg) => {
  if (platform.isAndroid) {
    return ToastAndroid.show(msg, ToastAndroid.SHORT);
  }

  return Alert.alert('', msg);
};

export default notifyMessage;
