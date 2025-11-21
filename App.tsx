import Home from './src/app/Home'
import { StatusBar } from 'expo-status-bar'
import { loadFonts } from './src/config/fonts'
import React, { useState, useEffect } from 'react'
import CreationAndEdition from '@/app/CreationAndEdition'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text as RNText,
  TextInput as RNTextInput,
  TextProps as RNTextProps,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle
} from 'react-native'
import Details from '@/app/Details'

export type RootStackParamList = {
  Home: undefined;
  CreationAndEdition: undefined;
  Details: {id:string};
};
export const Text = (props: RNTextProps) => {
  const { style, ...rest } = props;
  return (
    <RNText
      style={[{ fontFamily: 'Lato-Regular' }, style]}
      {...rest}
    />
  );
};
export const TextInput = (props: RNTextInputProps) => {
  const { style, ...rest } = props;
  return (
    <RNTextInput
      style={[{ fontFamily: 'Lato-Regular' }, style]}
      {...rest}
    />
  );
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }
    prepare();
  }, []);
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreationAndEdition"
          component={CreationAndEdition}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
declare module 'react-native' {
  interface TextProps {
    style?: StyleProp<TextStyle>;
  }
  interface TextInputProps {
    style?: StyleProp<TextStyle>;
  }
}
