import React,{Component} from 'react';
import {View,TextInput,Text} from 'react-native-ui-lib';
import PropTypes from 'prop-types';

export default class InputWithText extends Component{
    render(){
        return (
            <View style={{marginLeft:this.props.marginLeft,marginRight:this.props.marginRight,}}>
                <Text white text15 Bold>{this.props.name}</Text>
                <TextInput text50 dark50 secureTextEntry={this.props.isSecureTextEntry?true:false}/>
            </View>
        );
    }
}

InputWithText.defaultProps = {
    marginLeft:20,
    marginRight:20,
  };
InputWithText.propTypes={
    name:PropTypes.string.isRequired,
    placeHolder:PropTypes.string,
    isSecureTextEntry:PropTypes.bool,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
}