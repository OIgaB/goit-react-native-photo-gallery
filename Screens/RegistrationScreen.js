import React from 'react';
import { StatusBar, View, ActivityIndicator, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView } from 'react-native';

// Roboto 
// 30 medium 
// 17 medium
// 16 regular
// 16 medium
// 13 bold
// 13 regular
// 11 regular
// 10 regular

// inter 
// 16 medium

// const STYLES = ['default', 'dark-content', 'light-content'];
// const TRANSITIONS = ['fade', 'slide', 'none'];

// const onPressShow = () => {
//     setTitleText("Bird's Nest [pressed]");
// };

const RegistrationScreen = () => {
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0],);

    const [text, onChangeText] = React.useState('');

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

    return (
        <SafeAreaView>
     {/* <StatusBar
    //     animated={true}
    //     backgroundColor="#61dafb"
    //     barStyle={statusBarStyle}
    //     showHideTransition={statusBarTransition}
    //     hidden={hidden}
    // /> */}
    <KeyboardAvoidingView // автоматична підгонка висоти, розташування або нижнього паддінга компонента на основі висоти клавіатури, щоб компоненту залишатися видимим поки віртуальна клава відображена
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <ActivityIndicator size="small" color="#0000ff" />
                <View>
                    <Text>Реєстрація</Text>
                </View>
                <TextInput placeholder="Логін" onChangeText={onChangeText} style={styles.textInput} />
                <TextInput placeholder="Адреса електронної пошти" onChangeText={onChangeText} style={styles.textInput} />
                <TextInput placeholder="Пароль" onChangeText={onChangeText} style={styles.textInput} />
                <Text style={styles.visibleText} onPress={onPressShow}>Показати</Text>

                {/* <View style={styles.btnContainer}> */}
                <Button
                    onPress={onPressLearnMore}
                    // onPress={() => Alert.alert('Right button pressed')}
                    // onPress={() => null}
                    title="Зареєстуватися"
                    color="FF6C00" 
                    accessibilityLabel="Press to sign up"
                    disabled="true"
                />
                {/* </View> */}
                <Text>Вже є акаунт? Увійти</Text>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </SafeAreaView>
    )

    const styles = StyleSheet.create({
        container: {
          flex: 1,
    //       justifyContent: 'center',
    //       marginHorizontal: 16,
        },
        inner: {
            padding: 24,
            flex: 1,
            justifyContent: 'space-around',
        },
    //     title: {
    //       textAlign: 'center',
    //       marginVertical: 8,
    //     },
        textInput: {
            height: 40,
            borderColor: '#000000',
            borderBottomWidth: 1,
            marginBottom: 36,
            // height: 40,
            // margin: 12,
            // borderWidth: 1,
            // padding: 10,
            // textAlign: 'left', 'center', 'right')

            // placeholderTextColor
            // multiline: true,
            // numberOfLines={4}
            // maxLength={40}
            // onChangeText={text => onChangeText(text)}
            // value={value}

            // autoCorrect: true,
            // autoFocus: true,
            // caretHidden: true // введення приховане
            // secureTextEntry: true, // для паролів
            // clearButtonMode: always  // кнопка очищення поля
            // enterKeyHint: done // визначає, який текст має бути відображений у відповідь // не на андроїді
            // keyboardAppearance: default', 'light', 'dark
            // keyboardType: email-address, 
        },
        // btnContainer: {
        //     backgroundColor: 'white',
        //     marginTop: 12,
        // },


    //     fixToText: {
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //     },
    //     separator: {
    //       marginVertical: 8,
    //       borderBottomColor: '#737373',
    //       borderBottomWidth: StyleSheet.hairlineWidth,
    //     },
    });
}

export default RegistrationScreen;