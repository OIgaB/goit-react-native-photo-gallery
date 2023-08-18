import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RegistrationScreen, LoginScreen, PostsScreen } from './Screens/RegistrationScreen.js'


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-700': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Medium.ttf'),
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>This is my first homework on React native!</Text>
      <StatusBar style="auto" />

      <RegistrationScreen />
      <LoginScreen />
      <PostsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// html {
//   font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;
//   font-size: 11px;
//   color: #141823;
// }

