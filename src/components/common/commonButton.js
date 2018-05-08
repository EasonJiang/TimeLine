import React,{Component} from 'react';
import {View,Button} from 'react-native-ui-lib';
import PropTypes from 'prop-types';

export default class CommonButton extends Component{
    
    render(){
        return (
                <Button text70 white  label={this.props.name} 
                    onPress={()=>{this.props.nextStep()}}
                    style={{backgroundColor:this.props.bgdColor,marginLeft:this.props.marginL}}
                />
        );
    }
}

CommonButton.defaultProps = {
    marginLeft:20,
    marginRight:20,
    bgdColor:'#de3647',
    marginL:0,
    marginR:0,
  };
  CommonButton.propTypes={
    name:PropTypes.string.isRequired,
    nextStep:PropTypes.func,
    marginL: PropTypes.number,
    marginR: PropTypes.number,
    bgdColor:PropTypes.string,
}