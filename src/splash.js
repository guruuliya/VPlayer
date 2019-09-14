import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image,StatusBar} from 'react-native';

export default class Splash extends Component {
    constructor() {
        super();
        this.state = {};
        console.disableYellowBox = true;
      }
    
    componentWillMount(){
        StatusBar.setHidden(false);
    }

    
    render() {
        
        return (
            <View style={styles.container}>
                <Image style={styles.icon} source={require('./logo.png')} />  
                <Text style={styles.title}>Welcome</Text>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#1f1f1e',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    icon: {
        width: 200,
        height: 200,
    },
});
