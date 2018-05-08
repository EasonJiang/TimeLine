import React,{Component} from 'react';
import {View,Button} from 'react-native-ui-lib';
import { ImageBackground,Text} from 'react-native';
import Login from './login';
import ImageSwiper from './common/imageSwiper';

var slides=[
    {imageUrl:'',title:'WalkThrought',text:'App freature',content:'Here is an example of the Augmented Reality (AR) work we are currently developing. A portal door that allows you to visit a school in Worcester without leaving London. Just imagine the possibilities for this technology.'},
    {imageUrl:'',title:'WalkThrought',text:'App Content',content:'Here is an example of the Augmented Reality (AR) work we are currently developing. A portal door that allows you to visit a school in Worcester without leaving London. Just imagine the possibilities for this technology.'},
    {imageUrl:'',title:'WalkThrought',text:'About US',content:'Here is an example of the Augmented Reality (AR) work we are currently developing. A portal door that allows you to visit a school in Worcester without leaving London. Just imagine the possibilities for this technology.'}
]
export default class Feature extends Component {

    nextStep(){
        this.props.navigation.navigate('Login');
    }
    render(){
        return(
            <View  style={{ flex: 1, }}>
                <ImageBackground
                    style={{
                        flex: 1,
                    }}
                    source={require('../assets/icons/social_bg.png')}
                    resizeMode='cover'
                >
                    <ImageSwiper callback={()=>this.nextStep()} Slides={slides}/>
                </ImageBackground>
            </View>
        );
    }


}