import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules, Platform} from 'react-native';
import Reactotron, {networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

let reactotron;

if (__DEV__) {
  const {scriptURL} = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];

  if (Platform.OS === 'android') {
    reactotron = Reactotron.configure({
      host: scriptHostname,
      name: `💻 on ip:${scriptHostname}`,
    })
      .useReactNative({storybook: true, devTools: true})
      .setAsyncStorageHandler(AsyncStorage)
      .use(networking())
      .use(reactotronRedux())
      .useReactNative()
      .connect();
  } else {
    reactotron = Reactotron.configure({
      name: `💻  on ip:${scriptHostname}`,
      host: scriptHostname,
    })
      .useReactNative({storybook: true})
      .setAsyncStorageHandler(AsyncStorage)
      .use(reactotronRedux())
      .use(networking())
      .useReactNative()
      .connect();
  }

  console.tron = reactotron;
  const oldConsoleLog = console.log;
  const oldConsoleError = console.error;
  const oldConsoleWarn = console.warn;

  console.log = (...args) => {
    oldConsoleLog(...args);
    Reactotron.display({
      name: 'LOG',
      value: args,
      preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
    });
  };
  console.error = (...args) => {
    oldConsoleError(...args);
    Reactotron.display({
      name: 'ERROR',
      value: args,
      preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
    });
  };
  console.warn = (...args) => {
    oldConsoleWarn(...args);
    Reactotron.display({
      name: 'WARN',
      value: args,
      preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
    });
  };

  if (console?.tron) {
    console.tron.clear?.();
  }
}

export default reactotron;
