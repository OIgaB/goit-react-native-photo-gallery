import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { RegistrationScreen } from './Screens/index.js'
// import { RegistrationScreen, LoginScreen, PostsScreen } from './Screens/RegistrationScreen.js'


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-700': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Medium.ttf'),
  });

  if(!fontsLoaded) { // якщо шрифти не підвантажились, нічого не відображати
    return null;
  }

  return (
        <View style={{flex: 1}}>
          <RegistrationScreen />
          {/* <LoginScreen /> */}
          {/* <PostsScreen />  */}
        </View>      
  );
}