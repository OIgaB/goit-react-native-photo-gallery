// import { NavigationContainer } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { RegistrationScreen } from './Screens/index.js'
// import { RegistrationScreen, LoginScreen, PostsScreen } from './Screens/RegistrationScreen.js'

    // const STYLES = ['default', 'dark-content', 'light-content'];
    // const TRANSITIONS = ['fade', 'slide', 'none'];

    // const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    // const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0],);

    // const changeStatusBarVisibility = () => setHidden(!hidden);

    // const changeStatusBarStyle = () => {
    //     const styleId = STYLES.indexOf(statusBarStyle) + 1;
    //     if (styleId === STYLES.length) {
    //       setStatusBarStyle(STYLES[0]);
    //     } else {
    //       setStatusBarStyle(STYLES[styleId]);
    //     }
    //   };
    
    //   const changeStatusBarTransition = () => {
    //     const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    //     if (transition === TRANSITIONS.length) {
    //       setStatusBarTransition(TRANSITIONS[0]);
    //     } else {
    //       setStatusBarTransition(TRANSITIONS[transition]);
    //     }
    //   };
// const Stack = createNativeStackNavigator();

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
    // <NavigationContainer>
      // <Stack.Navigator> - manages a stack of screens 
      // <Stack.Navigator>
        // <Stack.Screen name="Registration" component={RegistrationScreen} />
        // <Stack.Screen name="Login" component={LoginScreen} />
        //<Stack.Screen name="Posts" component={PostsScreen} /> 

        <View style={{flex: 1}}> 

          {/* лодер */}
          {/* <ActivityIndicator size="small" color="#0000ff" />    */}

          {/* StatusBar - верхня панель з даними (заряд, інтернет...) */}
          {/* style="auto" - прозорий колір панелі, контент налазить на дані статус-бара */}
          {/* <StatusBar 
            // style="auto" 
            // animated={true}
            // backgroundColor="#61dafb"
            // barStyle={statusBarStyle}
            // showHideTransition={statusBarTransition}
            // hidden={hidden} 
          />  */}

          <RegistrationScreen />
          {/* <LoginScreen />
          <PostsScreen /> */}
        </View>      
      // </Stack.Navigator>
    // </NavigationContainer> 
  );
}

// html {
//   font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;
//   font-size: 11px;
//   color: #141823;
// }