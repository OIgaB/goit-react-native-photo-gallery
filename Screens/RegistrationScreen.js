import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView } from 'react-native';


// const onPressShow = () => {
//     setTitleText("Bird's Nest [pressed]");
// };


const RegistrationScreen = () => {
    const [focusedInput, setFocusedInput] = useState(null);

    const handleFocus = (inputName) => {
      setFocusedInput(inputName);
    };
  
    const handleBlur = () => {
      setFocusedInput(null);
    };
  
    const isInputFocused = (inputName) => {
      return focusedInput === inputName;
    };

    return (
        <View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Реєстрація</Text> 
                </View>
                <View>
                    <TextInput 
                        placeholder="Логін" 
                        placeholderTextColor='rgb(189, 189, 189)' 
                        autoFocus={true}  // одразу в фокусі при відкритті додатку
                        // clearButtonMode='always'  // кнопка очищення поля - тільки для iOS
                        // enterKeyHint: done // у відповідь після заповнення покаже "done"- тільки для iOS
                        style={[styles.input, isInputFocused('input1') && styles.focusedInput]} 
                        onFocus={() => handleFocus('input1')}
                        onBlur={handleBlur}
                    />
                        {/* onChangeText={onChangeText} */}

                    <TextInput 
                        placeholder="Адреса електронної пошти" 
                        placeholderTextColor='rgb(189, 189, 189)' 
                        keyboardType='email-address' 
                        style={[styles.input, isInputFocused('input2') && styles.focusedInput]} 
                        onFocus={() => handleFocus('input2')}
                        onBlur={handleBlur}
                    />
                        {/* onChangeText={onChangeText} */}

                    <TextInput 
                        placeholder="Пароль" 
                        placeholderTextColor='rgb(189, 189, 189)' 
                        secureTextEntry={true} // приховане введення для паролів (крапочки, але остання літера завжди видима)
                        style={[styles.input, isInputFocused('input3') && styles.focusedInput]} 
                        onFocus={() => handleFocus('input3')}
                        onBlur={handleBlur}
                    />
                    {/* onChangeText={onChangeText} 
                    onChangeText={text => onChangeText(text)}
                    multiline: true,
                    numberOfLines={4}
                    maxLength={40}
                    value={value}
                    autoCorrect: true, */}

                    <Text>Показати</Text> 
                    {/* onPress={onPressShow} */}
                </View>
            </View>
        </View>
    );
}


    // const [text, onChangeText] = React.useState('');

    // return (
    //     <View>
    {/* <KeyboardAvoidingView // автоматична підгонка висоти, розташування або нижнього паддінга компонента на основі висоти клавіатури, щоб компоненту залишатися видимим поки віртуальна клава відображена
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    > */}
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}

            // <View style={styles.inner}>


                {/* <View style={styles.btnContainer}> */}
                {/* <Button
                    onPress={onPressLearnMore}
                    // onPress={() => Alert.alert('Right button pressed')}
                    // onPress={() => null}
                    title="Зареєстуватися"
                    color="FF6C00" 
                    accessibilityLabel="Press to sign up"
                    disabled="true"
                /> */}
                {/* </View> */}

                {/* <TouchableHighlight onPress={onPress}>  // кнопка при натисканні затемнюється
                    <View style={styles.button}>
                    <Text>Touch Here</Text>
                    </View>
                </TouchableHighlight> */}
                {/* button: {
                    alignItems: 'center',
                    backgroundColor: '#DDDDDD',
                    padding: 10,
                }, */}

                {/* <Text>Вже є акаунт? Увійти</Text> */}
            // </View>
        {/* </TouchableWithoutFeedback> */}
    {/* </KeyboardAvoidingView> */}
//     </View>
//     )


    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            paddingHorizontal: 16,
            justifyContent: 'center',
        },
        
        // inner: {
        //     padding: 24,
        //     flex: 1,
        //     justifyContent: 'space-around',
        // },
        title: {
            textAlign: 'center',
            fontFamily: 'Roboto', 
            fontWeight: '500',
            fontSize: 30,
            textShadowOffset: { width: 0, height: 4 }, // зміщення тіні по вертикалі
            textShadowRadius: 4, // радіус розмитості тіні
            textShadowColor: 'rgba(0, 0, 0, 0.25)', // прозорість тіні
            marginBottom: 32,

        },
        input: {
            height: 50,
            color: 'rgb(33, 33, 33)', // колір тексту, що вводить користувач
            backgroundColor: 'rgb(246, 246, 246)',
            borderColor: 'rgb(232, 232, 232)',
            borderWidth: 1,
            borderRadius: 8,
            paddingLeft: 16,
            marginBottom: 15,
        },
        focusedInput: {
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(255, 108, 0)', 
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


export default RegistrationScreen;