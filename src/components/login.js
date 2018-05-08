import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { View, Image, TextInput, Text, Button } from 'react-native-ui-lib';
import InputWithText from './common/inputWithText';
import CommonButton from './common/commonButton';
import {loginAPI} from '../data/login_API';

export default class Login extends Component {
    // static navigationOptions = ({ navigation }) => ({
    //     header: null
    // });

    goToNextPage(type) {
        this.props.navigation.navigate(type=='R'?'Register':'TimeLine');
    }

    doLogin(){
        var a = '5';
        var b = 5;
            a == b;

        loginAPI();
    }

    render() {
        return (
            <View flex>
                <ImageBackground
                    style={{
                        flex: 1,
                    }}
                    source={require('../assets/icons/social_bg.png')}
                    resizeMode='cover'
                >

                    <View marginL-135 marginT-70 style={{
                        borderWidth: 1, borderColor: '#342d45', borderRadius: 16, width: 145, height: 145,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Image source={require('../assets/icons/logo.jpg')} style={{ width: 130, height: 130, borderRadius: 16, }} right></Image>
                    </View>

                    <View flex paddingH-25 paddingT-80 style={{
                        backgroundColor: 'transparent',}}>
                        <InputWithText name='USER NAME' />
                        <InputWithText name='PASSWORD' isSecureTextEntry={true} />
                        <View marginT-70 center felx-2 row >
                            <CommonButton name='Login' nextStep={() => { this.doLogin()}}/>
                            <CommonButton name='Sign Up' nextStep={() => { this.goToNextPage('R') }} bgdColor='#56403a' marginL={15} />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}