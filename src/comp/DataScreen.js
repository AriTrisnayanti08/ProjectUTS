import React, { Component } from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TextInput,
  //Image,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';



class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.Header}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'white', padding: 5 }}>DATA PRESTASI SISWA</Text>
        </View>
      </View>
    );
  }
}

class Data extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerLeft: null
  };
  constructor() {
    super();
    this.state = {
      nama: ' ',
      noInduk: ' ',
      telp: ' ',
      alamat: ' ',
      namaPrestasi: ' ',
      tingkat: ' ',
      tahun: ' ',
      ActivityIndicator_Loading: false,
    };
  }
    //fungsi mengirim data ke database
InsertDataIntoMySQL = () => {
  this.setState({ ActivityIndicator_Loading: true }, () => {
    //mengirim data ke database melalui api
    fetch('http://nikomangaritrisnayanti.000webhostapp.com/aritrisnayanti078/kirimData.php',
    {
      method: 'POST',
      headers:
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
      {
        noInduk: this.state.noInduk,
        nama: this.state.nama,
        telp: this.state.telp,
        alamat: this.state.alamat,
        namaPrestasi: this.state.namaPrestasi,
        tingkat: this.state.tingkat,
        tahun: this.state.tahun,

      })
    }).then((response) => response.json()).then((responseJsonFromServer) => {
      Alert.alert(responseJsonFromServer);
      this.setState({ ActivityIndicator_Loading: false });
    }).catch((error) => {
      console.error(error);
      this.setState({ ActivityIndicator_Loading: false });
    });
  });
}

render() {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.containerMain}>
    <View style={styles.kotak}>
    <View style={{ margin: 10, alignItems: 'center' }}>
        <Text style={styles.text}>INPUT DATA PRESTASI</Text>
    </View>
      <TextInput
        style={styles.Input}
        placeholder="No Induk "
        underlineColorAndroid="transparent"
        returnKeyType="next"
        keyboardType="numeric"
        onChangeText={(noInduk) => this.setState({ noInduk })}
      />
      <TextInput
        style={styles.Input}
        placeholder="Nama "
        underlineColorAndroid="transparent"
        returnKeyType="next"
        autoCapitalize="words"
        onChangeText={(nama) => this.setState({ nama })}
      />
      <TextInput
        style={styles.Input}
        placeholder="No Telp "
        underlineColorAndroid="transparent"
        returnKeyType="next"
        keyboardType="numeric"
        onChangeText={(telp) => this.setState({ telp })}
      />
      <TextInput
        style={styles.Input}
        placeholder="Alamat "
        underlineColorAndroid="transparent"
        returnKeyType="next"
        autoCapitalize="words"
        onChangeText={(alamat) => this.setState({ alamat })}
      />
      <TextInput
        style={styles.Input}
        placeholder="Nama Lomba "
        underlineColorAndroid="transparent"
        returnKeyType="next"
        autoCapitalize="words"
        onChangeText={(namaPrestasi) => this.setState({ namaPrestasi })}
      />
      <TextInput
        style={styles.Input}
        placeholder="Tingkat "
        underlineColorAndroid="transparent"
        returnKeyType="next"
        autoCapitalize="words"
        onChangeText={(tingkat) => this.setState({ tingkat })}
      />
      <TextInput
        style={styles.Input}
        placeholder="Tahun Raih "
        underlineColorAndroid="transparent"
        returnKeyType="next"
        keyboardType="numeric"
        onChangeText={(tahun) => this.setState({ tahun })}
      />
      <View style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.TouchableOpacityStyle}
          onPress={this.InsertDataIntoMySQL}
        >
          <Text style={styles.TextStyle}>Simpan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.TouchableOpacityStyle1}
             onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text style={styles.TextStyle}>Cancel</Text>
            </TouchableOpacity>
          {
          this.state.ActivityIndicator_Loading ?
          <ActivityIndicator
          color='#43A047'
          size='large'
          style={styles.ActivityIndicatorStyle}
          /> : null
          }
        </View>
      </View>
    </KeyboardAvoidingView>
    );
  }
}
export default Data;

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
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginTop: 5,
    marginRight: 15,
    marginLeft: 15
  },
  TouchableOpacityStyle: {
    paddingTop: 5,
    paddingBottom: 5,
     backgroundColor: '#43A047',
     marginTop: 5,
     width: '30%',
     borderRadius: 7,
  },
  TouchableOpacityStyle1: {
    paddingTop: 5,
    paddingBottom: 5,
     backgroundColor: '#EF5350',
     marginTop: 10,
     width: '30%',
     borderRadius: 7,
  },
  TextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
    },
 ActivityIndicatorStyle: {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center'
},
Input: {
  textAlign: 'center',
  height: 40,
  backgroundColor: '#E3F2FD',
  borderWidth: 1,
  borderColor: '#1A237E',
  borderRadius: 7,
  marginBottom: 5,
  marginLeft: 30,
  width: '80%'
 },
 kotak: {
   marginTop: 15,
   marginLeft: 20,
   marginRight: 20,
   backgroundColor: '#64B5F6',
   flex: 0.95,
   borderRadius: 15
 },
 Icon: {
   alignItems: 'center',
   justifyContent: 'center',
   height: 50,
   width: 50,
 },
});
