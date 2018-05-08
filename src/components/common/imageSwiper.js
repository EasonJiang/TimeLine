import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { View, Button,Text,Image} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import {textStyle} from '../../styles/styles'
export default class ImageSwiper extends Component {
    render() {
        var slides = [];
        for(var i = 0; i < this.props.Slides.length; i++){
            slides.push(
                <View style={styles.slide1} key={i}>
                    <Text marginB-20 style={[styles.text]}>{this.props.Slides[i].title}</Text>
                    <Image style={styles.image} source={require('../../assets/icons/slide_pic_1.png')}/>
                    <View style={{width:350,height:150,backgroundColor:'#fff'}}>
                    <Text  style={[styles.text,{color:'black'}]} center>{this.props.Slides[i].text}</Text>
                    <Text style={{fontWeight:'bold'}}  center>{this.props.Slides[i].content}</Text>
                    </View>
                    
                </View>
            );
        }
        return (
            <Swiper style={styles.wrapper} onIndexChanged ={(index)=>{
                debugger
                if(index+1 == 3){
                    setTimeout(()=>{this.props.callback();},500);
                } 
            }} showsButtons>
               {slides}
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    image:{width:350,
        height:300,},
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

// ImageSwiper.defaultProps = {
//     Slides: 1,
// };
ImageSwiper.propTypes = {
    Slides: PropTypes.array.isRequired,
    callback:PropTypes.func.isRequired,
}