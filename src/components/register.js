import React, { Component } from 'react';
import {ImageBackground} from 'react-native';
import { View, Image, TextInput, Text, Button } from 'react-native-ui-lib';
import InputWithText from './common/inputWithText';
import CommonButton from './common/commonButton';

export default class Login extends Component {
    // static navigationOptions = ({navigation}) => ({
    //     header:null
    // });

    goToNextPage(type) {
        this.props.navigation.navigate(type=='R'?'Register':'TimeLine');
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

                <View marginL-135 marginT-70 style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 70, width: 145, height: 145, 
                    justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#d47c62'}}>
                    <Image source={require('../assets/icons/iconn_07.png')} style={{ width: 145, height: 145, }} right></Image>
                </View>
                <View flex paddingH-25 paddingT-80 style={{
                    backgroundColor: 'transparent',
                }}>
                    <InputWithText name='USER NAME'/>
                    <InputWithText name='EMAIL'/>
                    <InputWithText name='PASSWORD' isSecureTextEntry={true}/>
                    <View marginT-50 center felx-2 row >
                            <CommonButton name='Sign Up' nextStep={() => { this.goToNextPage('R') }}  />
                            <CommonButton name='Login' nextStep={() => { this.goToNextPage('L') }} bgdColor='#56403a' marginL={15}/>
                        </View>
                </View>
                </ImageBackground>
            </View>
        )
    }
}