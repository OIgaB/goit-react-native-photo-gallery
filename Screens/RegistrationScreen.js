import { useState, useEffect, Fragment } from 'react';
import { View, StatusBar, ImageBackground, Image, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, Dimensions } from 'react-native';
import userPhoto from '../assets/images/user-photo.jpg';

const RegistrationScreen = () => {
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
                        <View style={[styles.container, keyboardStatus === 'Keyboard Shown' && { marginTop: 147 }]}> 

                            <View style={styles.photoContainer}>    
                                { userPhoto && (
                                    <Image style={styles.photo} source={userPhoto} />
                                )}                 
                                {/* onPress={addPhoto}*/}
                                <TouchableOpacity> 
                                    {userPhoto 
                                    ? <Image source={require('./../assets/images/remove.png')} style={styles.addRemoveIcon} />
                                    : <Image source={require('./../assets/images/add.png')} style={styles.addRemoveIcon} />
                                    }    
                                </TouchableOpacity>
                            </View>

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
                                    onSubmitEditing={Keyboard.dismiss} // при submit-і клавіатура зникає
                                />
                                    {/* onChangeText={onChangeText} */}
                                <TextInput 
                                    placeholder="Адреса електронної пошти" 
                                    placeholderTextColor='rgb(189, 189, 189)' 
                                    keyboardType='email-address' 
                                    style={[styles.input, isInputFocused('input2') && styles.focusedInput]} 
                                    onFocus={() => handleFocus('input2')}
                                    onBlur={handleBlur}
                                    onSubmitEditing={Keyboard.dismiss}
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
                                        onSubmitEditing={Keyboard.dismiss}
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

                            {/* TouchableOpacity - тут це кнопка, бо Button нормально не стилізуєш. <TouchableHighlight> (коли кнопка при натисканні затемнюється) - не працює */}
                            {/* onPress={onPress} */}
                            { keyboardStatus === 'Keyboard Hidden' && ( // React.Fragment замість <>...</>
                                <Fragment> 
                                    <TouchableOpacity activeOpacity={0.6} style={styles.button}>       
                                        <Text style={styles.buttonText}>Зареєстуватися</Text>
                                    </TouchableOpacity>
                            
                                    <View>
                                        <Text style={styles.link}>
                                            Вже є акаунт? <Text style={[styles.link, isClicked && styles.linkClicked]} onPress={handleLinkClick}>Увійти</Text>
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
            // resizeMode: 'stretch',
        },
        keyboardAvoidingView: {
            flex: 1,
        },
        container: { // контейнер зі всім вмістом
            position: 'relative',
            flex: 1,
            zIndex: 1,  
            marginTop: 263,
            paddingHorizontal: 16,
            backgroundColor: 'rgb(255, 255, 255)',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
        },
        photoContainer: {
            position: 'absolute',
            width: 120,
            height: 120,
            top: -60,
            left: '50%',
            transform: [{ translateX: -50 }],   // -50%  
            borderRadius: 16,
            backgroundColor: 'rgb(246, 246, 246)',
        },
        photo: {
            width: '100%',
            height: '100%',
            borderRadius: 16,
            // resizeMode: 'cover',
        },
        addRemoveIcon: { // плюсик - хрестик
            // position: 'absolute',
            width: 25,
            height: 25,
            bottom: 35,
            left: 107,
            // top: 80,
            // right: -107,
        },
        title: {
            textAlign: 'center',
            fontFamily: 'Roboto', 
            fontWeight: '500',
            fontSize: 30,
            textShadowOffset: { width: 0, height: 4 }, // зміщення тіні по вертикалі
            textShadowRadius: 4, // радіус розмитості тіні
            textShadowColor: 'rgba(0, 0, 0, 0.25)', // прозорість тіні
            marginTop: 92,
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


export default RegistrationScreen;