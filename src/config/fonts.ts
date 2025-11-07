import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
  });
};

export const fontConfig = {
  Lato: {
    300: 'Lato-Light',
    400: 'Lato-Regular',
    700: 'Lato-Bold',
    normal: 'Lato-Regular',
    italic: 'Lato-Italic',
  },
};
