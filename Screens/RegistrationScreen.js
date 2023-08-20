import { useState } from 'react';
import { View, StatusBar, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


const RegistrationScreen = () => {
    const [focusedInput, setFocusedInput] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleFocus = (inputName) => {
      setFocusedInput(inputName);
    };
  
    const handleBlur = () => {
      setFocusedInput(null);
    };
  
    const isInputFocused = (inputName) => {
      return focusedInput === inputName;
    };

    const handleLinkClick = () => {
        setIsClicked(true);
    };
    
    const handlePasswordClick = () => {
        if (passwordVisible === false) {
            setPasswordVisible(true);
            return;
        }
        setPasswordVisible(false);
    };


    return (
        <View style={styles.wrapper}> 
            <ImageBackground source={require('./../assets/images/background-img.jpg')} style={styles.bgrImage}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
                
                <View style={styles.container}>
                    <View style={styles.photoContainer}/>
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
                        <View style={{position: 'relative'}}>
                            <TextInput 
                                placeholder="Пароль" 
                                placeholderTextColor='rgb(189, 189, 189)'                         
                                secureTextEntry={!passwordVisible} // secureTextEntry={true} - приховане введення для паролів (крапочки, але остання літера завжди видима
                                onFocus={() => handleFocus('input3')}
                                onBlur={handleBlur}
                                style={[styles.input, isInputFocused('input3') && styles.focusedInput]} 
                                // onChangeText={onChangeText} або onChangeText={text => onChangeText(text)}
                                // multiline={true}
                                // numberOfLines={4}
                                // maxLength={40}
                                // value={value}
                                // autoCorrect={true}
                            />
                            <TouchableOpacity style={{ position: 'absolute', right: 16, top: 14 }} onPress={handlePasswordClick}>       
                                <Text style={styles.link}>
                                    { passwordVisible ? 'Приховати' : 'Показати' }    
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    {/* TouchableOpacity - тут це кнопка, бо Button нормально не стилізуєш. <TouchableHighlight> - не працює */}
                    {/* onPress={onPress} */}
                    <TouchableOpacity activeOpacity={0.6} style={styles.button}>       
                        <Text style={styles.buttonText}>Зареєстуватися</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.container}>
                        <Text style={styles.link}>
                            Вже є акаунт? <Text style={[styles.link, isClicked && styles.linkClicked]} onPress={handleLinkClick}>Увійти</Text>
                        </Text>
                    </View>

                </View>
            </ImageBackground>
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


                {/* <TouchableHighlight onPress={onPress}>  // кнопка при натисканні затемнюється
                    <View style={styles.button}>
                    <Text>Touch Here</Text>
                    </View>
                </TouchableHighlight> */}

            // </View>
        {/* </TouchableWithoutFeedback> */}
    {/* </KeyboardAvoidingView> */}
//     </View>


    const styles = StyleSheet.create({
        wrapper: {
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        bgrImage: {
            // width: 375,
            // height: 549,  
            // flex: 1,
            // resizeMode: 'cover',
            // justifyContent: 'flex-end',     
            // flex: 1,
            // justifyContent: 'center', 
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
        },
        container: {
            // flex: 1,
            top: 263,
            bottom: 0,
            paddingHorizontal: 16,
            justifyContent: 'center',
            backgroundColor: 'rgb(255, 255, 255)',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
        },
        photoContainer: {
            width: 120,
            height: 120,
            top: -60,
            left: '50%',
            transform: [{ translateX: -50 }],
            borderRadius: 16,
            backgroundColor: 'rgb(246, 246, 246)',
        },
        title: {
            textAlign: 'center',
            fontFamily: 'Roboto', 
            fontWeight: '500',
            fontSize: 30,
            textShadowOffset: { width: 0, height: 4 }, // зміщення тіні по вертикалі
            textShadowRadius: 4, // радіус розмитості тіні
            textShadowColor: 'rgba(0, 0, 0, 0.25)', // прозорість тіні
            marginTop: 32,
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
        button: {
            backgroundColor: 'rgb(255, 108, 0)', 
            paddingVertical: 16,
            borderRadius: 100,
            marginTop: 43,
            marginBottom: 16,
        },
        buttonText: {
            fontFamily: 'Roboto',
            fontSize: 16,
            color: 'rgb(255, 255, 255)',
            textAlign: 'center',
        },
        link: {
            color: 'rgb(27, 67, 113)',
            fontFamily: 'Roboto',
            fontSize: 16,
            textAlign: 'center',
        },
        linkClicked: {
            color: 'rgba(27, 67, 113, 0.7)',
            textDecorationLine: 'underline',
        },


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