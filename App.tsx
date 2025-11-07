import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
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
} from 'react-native';
import { loadFonts } from './src/config/fonts';
import Home from './src/app/Home';

// Criando componentes personalizados com a fonte Lato
export const Text = (props: RNTextProps) => {
  const { style, ...rest } = props;
  return (
    <RNText 
      style={[
        { fontFamily: 'Lato-Regular' },
        style,
      ]} 
      {...rest} 
    />
  );
};

export const TextInput = (props: RNTextInputProps) => {
  const { style, ...rest } = props;
  return (
    <RNTextInput 
      style={[
        { fontFamily: 'Lato-Regular' },
        style,
      ]} 
      {...rest} 
    />
  );
};

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
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </View>
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

// Adicionando a tipagem para o tema de fontes
declare module 'react-native' {
  interface TextProps {
    style?: StyleProp<TextStyle>;
  }
  interface TextInputProps {
    style?: StyleProp<TextStyle>;
  }
}
