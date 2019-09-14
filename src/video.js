import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import orientation from 'react-native-orientation';
import VideoPlayer from 'react-native-video';
// import VideoPlayer from 'react-native-video-controls'
import {
  HideNavigationBar,
  ShowNavigationBar,
} from 'react-native-navigation-bar-color';

var { height, width } = Dimensions.get("window");

class Videoplay extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = { status: true, mode: "contain", back: true };
    console.disableYellowBox = true;
  }


  componentWillMount() {
    //
  }

  componentWillUnmount() {
    orientation.lockToPortrait();
  }

  a() {
    orientation.lockToLandscape();
    this.setState({ status: false, mode: "cover", back: false });
  }

  b() {
    orientation.lockToPortrait();
    this.setState({ status: true, mode: "contain", back: true });
  }
  c() {
    orientation.lockToPortrait();
    this.props.navigation.navigate('Videolist')
  }


  render() {



    return (

      <View style={{ flex: 1 }}>

        <VideoPlayer
          source={require('./video/big_buck_bunny.mp4')}
          ref={(ref) => {
            this.player = ref
          }}
          resizeMode={this.state.mode}
          controls={true}
          style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        />
        {

          this.state.status === true ?
            <View style={{flex:1,flexDirection:'row', width: 'auto', height: 50, position: 'absolute', overflow: 'visible', zIndex: 999,backgroundColor:'rgba(0, 0, 0, 0.1)'}}
            >
               <View 
               style={{ justifyContent:'flex-start' }}>
                <Icon name='arrow-back'
                  onPress={this.c.bind(this)}
                  color='black'
                  size={50}
                  type="MaterialIcons"
                />
              </View>
              <View
                style={{ justifyContent:'flex-end' }}>
                <Icon name='fullscreen'
                  color='black'
                  size={50}
                  fontSize='large'
                  onPress={this.a.bind(this)}

                />
              </View>   
            </View> :
            null
        }

        {

          this.state.back === false ?
          <View style={{flex:1,flexDirection:'row', width: 'auto', height: 50, position: 'absolute', overflow: 'visible', zIndex: 999,backgroundColor:'rgba(0, 0, 0, 0.1)'}}
          >
             <View 
             style={{ justifyContent:'flex-start' }}>
              <Icon name='arrow-back'
                onPress={this.c.bind(this)}
                color='black'
                size={50}
                type="MaterialIcons"
              />
            </View>
            <View
              style={{ justifyContent:'flex-end' }}>
              <Icon name='fullscreen-exit'
                color='black'
                size={50}
                fontSize='large'
                onPress={this.b.bind(this)}

              />
            </View>   
          </View>
            :
            null
        }
       

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    margin: 3,
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  profilepic: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    backgroundColor: '#203546',
  },
  bottom: {
    height: '55%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 3,
  },
  bottomitem: {
    width: '50%',
    height: '50%',
    padding: 8
    ,
  },
  bottomitemInner: {
    flex: 1,
    backgroundColor: '#275DAD',
    alignItems: 'center',
    justifyContent: 'center',

  },
  bottomitemInnerContent: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    padding: 5,
  },

  menuBox: {
    backgroundColor: '#275DAD',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12
  },
  icon: {
    width: 200,
    height: 200,
  },
  iconswipe: {
    width: 130,
    height: 130,
  },
  info: {
    fontSize: 22,
    color: '#696969',
  },
  wrapper: {
    backgroundColor: 'transparent',
    padding: 200
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#275DAD',
    height: 300
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


export default Videoplay;

