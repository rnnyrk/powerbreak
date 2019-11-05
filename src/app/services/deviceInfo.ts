import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isIphone = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const isXModel = () => isIphone && DeviceInfo.hasNotch();

