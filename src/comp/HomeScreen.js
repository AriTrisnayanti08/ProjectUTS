import React from 'react';
import {
  //Button,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

class LogoTitle extends React.Component { // header
  render() {
    return (
      <View style={styles.Header}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, color: 'white', padding: 5 }}>DAPRESWA</Text>
        </View>
      </View>
    );
  }
}

class HalamanHome extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerLeft: null
  };
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 5 }}>
         SELAMAT DATANG{'\n'}</Text>
         <Text style={{ fontSize: 18, textAlign: 'center' }}>
          APLIKASI PENCATATAN</Text>
          <View style={{ margin: 8, alignItems: 'center' }}>
            <Image source={require('../img/win.png')} style={styles.image} />
          </View>
          <View style={{ margin: 5 }}>
            <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 5 }}>
            {'*'} DATA PRESTASI SISWA {'*'}{'\n'}</Text>
          </View>
          <View style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.TouchableOpacityStyle}
              onPress={() => this.props.navigation.navigate('Input')}
            >
              <Text style={styles.TextStyle}>INPUT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle}
                onPress={() => this.props.navigation.navigate('Data')}
              >
                <Text style={styles.TextStyle}>LIHAT DATA</Text>
                </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
        <Text style={{ padding: 10, fontSize: 15, color: 'white' }}>Copyright@Ari_Trisnayanti</Text>
      </View>
     </View>
    );
  }
}
export default HalamanHome;

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column',
  },
  Header: {
     flex: 1,
     backgroundColor: '#2962FF'
  },
  footer: {
   //flex: 0.35,
   backgroundColor: '#0D47A1',
   alignItems: 'center',
   marginTop: 10,
   justifyContent: 'center'
 },
  text: {
    textAlign: 'left',
    fontSize: 15,
    color: 'black',
    marginRight: 15,
    marginLeft: 15
  },
  TextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
    },
  box1: {
    flex: 3,
    backgroundColor: '#64B5F6',
    margin: 15,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    borderRadius: 22
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
     backgroundColor: '#00838F',
     marginTop: 10,
     width: '50%',
     borderRadius: 8,
  }
});
