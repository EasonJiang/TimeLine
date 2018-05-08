import { Provider } from 'redux';
import React, { Component } from 'react';
import Feature from './components/feature'
import Login from './components/login'
import { ImageBackground,Text} from 'react-native'
import { View, Image, TextInput, } from 'react-native-ui-lib';
import {StackNavigator} from 'react-navigation';
import Register from './components/register';
import TimeLine from './components/timeLine'
const RootStack = StackNavigator(
    {
        Home:{
            screen:Feature,
            navigationOptions:{
                header:null
            }
        },
        Login:{
            screen:Login,
            navigationOptions:{
                header:null,
                headerTintColor:'#fff',
                headerTitleStyle: {
                    fontSize:30,
                    // fontWeight: 'bold',
                    
                  },
                headerStyle: {
                    backgroundColor: '#151129',
                    borderWidth:0,
                  },
            }
        },
        Register:{
            screen:Register,
            navigationOptions:{
                // header:null
                title:'Create Account',
                headerTintColor:'#fff',
                headerTitleStyle: {
                    fontSize:30,
                    fontWeight: 'bold',
                    
                  },
                headerStyle: {
                    backgroundColor: '#151129',
                    borderWidth:0,
                  },
            }
        },
        TimeLine:{
            screen:TimeLine
        }
    },
    {
        headerMode: 'screen',
    }
    

);

export default class Root extends Component {
    render() {
        return (
            <RootStack/>
        );
    }
}