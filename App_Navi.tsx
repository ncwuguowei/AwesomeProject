/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Counter, { useCounterStore } from './src/components/Counter/Counter';
import LoginScreen from './src/screens/LoginScreen';
import { SCREEN_DEVICES, SCREEN_HOME, SCREEN_LOGIN } from './src/screens/ScreenConst';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreenRedux from './src/screens/redux/LoginScreenRedux';
import HomeScreenRedux from './src/screens/redux/HomeScreenRedux';
import { Provider } from 'react-redux';
import { userStore } from './src/store/redux/userSlice';
import DeviceListScreen from './src/screens/DeviceListScreen';

// store use Redux-ToolKit
const useRedux: boolean = false;

const Stack = createNativeStackNavigator();


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const { reset: resetCounter } = useCounterStore()

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       {/* <Stack.Screen name={SCREEN_LOGIN} component={LoginScreen} />
  //       <Stack.Screen name={SCREEN_HOME} component={HomeScreen} /> */}
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

  if (useRedux) {
    return (
      <Provider store={userStore}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={SCREEN_LOGIN} component={LoginScreenRedux} />
            <Stack.Screen name={SCREEN_HOME} component={HomeScreenRedux} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={SCREEN_LOGIN} component={LoginScreen} />
          <Stack.Screen name={SCREEN_HOME} component={HomeScreen} />
          <Stack.Screen name={SCREEN_DEVICES} component={DeviceListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
