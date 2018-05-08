import React,{Component} from 'react';
import { AppRegistry } from 'react-native';
import Root from './src/root';

class App extends Component{
    render(){
        return (<Root/>);
    }
}
AppRegistry.registerComponent('TimeLine', () => App);
