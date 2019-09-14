/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import orientation from 'react-native-orientation';

class Videolist extends Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {};
        console.disableYellowBox = true;
      }

    componentWillMount() {
        orientation.lockToPortrait();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image style={styles.icon} source={require('./logo.png')} />
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('Videoplay')} >
                            <Image style={styles.im} resizeMode="cover" source={require('./image/1.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('Videoplay')}  >
                            <Image style={styles.im} resizeMode="cover" source={require('./image/2.png')} />

                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('Videoplay')} >
                            <Image style={styles.im} resizeMode="cover" source={require('./image/4.png')} />

                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomitem}>
                        <TouchableOpacity style={styles.bottomitemInner} onPress={() => this.props.navigation.navigate('Videoplay')} >
                            <Image style={styles.im} resizeMode="cover" source={require('./image/3.png')} />

                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1e'
    },
    top: {
        margin: 3,
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center'

    },


    bottom: {
        height: '55%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 3,
    },
    bottomitem: {
        width: '50%',
        height: '50%',
        padding: 8

    },
    im: {
        width: '100%',
        height: '100%'
    },
    bottomitemInner: {
        flex: 1,
        backgroundColor: '#1f1f1f',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#fff',

    },


    icon: {
        width: 200,
        height: 200,
    },

    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Videolist;
