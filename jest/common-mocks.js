import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.useFakeTimers();

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

/* eslint-disable @typescript-eslint/no-var-requires */
jest.mock('react-native-gesture-handler', () => {
  // eslint-disable-next-line global-require
  const View = require('react-native/Libraries/Components/View/View');
  return {
    GestureHandlerRootView: View,
    PanGestureHandler: View,
  };
});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('@react-native-firebase/remote-config', () => {
  return {
    default: jest.fn(),
    remoteConfig: jest.fn(),
  };
});
