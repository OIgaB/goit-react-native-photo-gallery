import { useState, useEffect, Fragment } from 'react';
import { View, StatusBar, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, Dimensions } from 'react-native';

const LoginScreen = () => {
    const [keyboardStatus, setKeyboardStatus] = useState('');
    const [focusedInput, setFocusedInput] = useState(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardStatus('Keyboard Shown');
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardStatus('Keyboard Hidden');
      });
  
      return () => {
        showSubscription.remove();  // метод remove відписується від прослуховування дій клавіатури - знімає event listener
        hideSubscription.remove();
      };
    }, []);



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
        // при натисканні на екран, клавіатура ховається:
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <View style={styles.wrapper}>
                <ImageBackground source={require('./../assets/images/background-img.jpg')} resizeMode='cover' style={styles.bgrImage}>

                    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
                
                    <KeyboardAvoidingView // автоматична підгонка висоти, розташування або нижнього паддінга компонента на основі висоти клавіатури, щоб компоненту залишатися видимим поки віртуальна клава відображена
                        behavior={Platform.OS === 'ios' ? 'padding' : ''} // padding - додається паддінг внизу контенту; height - зміна висоти компонента для підлаштування під доступний простір
                        // keyboardVerticalOffset={-116} //- не працює - відстань між top екрану користувача та react native view - положення компонента буде скориговано вгору, коли відображається клавіатура
                        style={styles.keyboardAvoidingView}
                    >

                        {/* При видимій клавіатурі застосуються стилі styles.container, де властивість top буде замінена на 147 */}
                        <View style={[styles.container, keyboardStatus === 'Keyboard Shown' && { marginTop: 273 }]}> 

                            <View>
                                <Text style={styles.title}>Увійти</Text> 
                            </View>
                            <View>
                                <TextInput 
                                    placeholder="Адреса електронної пошти" 
                                    autoFocus={true}  // одразу в фокусі при відкритті додатку
                                    placeholderTextColor='rgb(189, 189, 189)' 
                                    keyboardType='email-address' 
                                    style={[styles.input, isInputFocused('input2') && styles.focusedInput]} 
                                    onFocus={() => handleFocus('input2')}
                                    onBlur={handleBlur}
                                    onSubmitEditing={Keyboard.dismiss}
                                />
                                <View style={{position: 'relative'}}>
                                    <TextInput 
                                        placeholder="Пароль" 
                                        placeholderTextColor='rgb(189, 189, 189)'                         
                                        secureTextEntry={!passwordVisible} // secureTextEntry={true} - приховане введення для паролів (крапочки, але остання літера завжди видима
                                        onFocus={() => handleFocus('input3')}
                                        onBlur={handleBlur}
                                        style={[styles.input, isInputFocused('input3') && styles.focusedInput]} 
                                        onSubmitEditing={Keyboard.dismiss}
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', right: 16, top: 14 }} onPress={handlePasswordClick}>       
                                        <Text style={styles.link}>
                                            { passwordVisible ? 'Приховати' : 'Показати' }    
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* TouchableOpacity - тут це кнопка, бо Button нормально не стилізуєш. <TouchableHighlight> (коли кнопка при натисканні затемнюється) - не працює */}
                            { keyboardStatus === 'Keyboard Hidden' && ( // React.Fragment замість <>...</>
                                <Fragment> 
                                    <TouchableOpacity activeOpacity={0.6} style={styles.button}>       
                                        <Text style={styles.buttonText}>Зареєстуватися</Text>
                                    </TouchableOpacity>
                            
                                    <View>
                                        <Text style={styles.link}>
                                            Немає акаунту? <Text style={[styles.link, isClicked && styles.linkClicked]} onPress={handleLinkClick}>Зареєстуватися</Text>
                                        </Text>
                                    </View> 
                                </Fragment>
                            )} 
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>        
        </TouchableWithoutFeedback>
    );
}

    const styles = StyleSheet.create({
        wrapper: {
            flex: 1,
        },
        bgrImage: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
        keyboardAvoidingView: {
            flex: 1,
        },
        container: { // контейнер зі всім вмістом
            position: 'relative',
            flex: 1,
            zIndex: 1,  
            marginTop: 323,
            paddingHorizontal: 16,
            backgroundColor: 'rgb(255, 255, 255)',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
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
            fontFamily: 'Roboto',
            fontSize: 16,
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
    });


export default LoginScreen;