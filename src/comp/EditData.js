import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  List,
  ListItem,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class Title extends React.Component { // header
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

class EditDataActivity extends Component {
  static navigationOptions = {
    headerTitle: <Title />,
    headerLeft: null
};

constructor(props) {
  super(props)
    this.state = {
      noInduk: '',
      nama: '',
      telp: '',
      alamat: '',
      namaPrestasi: '',
      tingkat: '',
      tahun: '',
    }
  }

 componentDidMount() {
   this.setState({
     noInduk: this.props.navigation.state.params.noInduk,
     nama: this.props.navigation.state.params.nama,
     telp: this.props.navigation.state.params.telp,
     alamat: this.props.navigation.state.params.alamat,
     namaPrestasi: this.props.navigation.state.params.namaPrestasi,
     tingkat: this.props.navigation.state.params.tingkat,
     tahun: this.props.navigation.state.params.tahun,
 });
}

UpdateDataRecord= () => {
  fetch('http://nikomangaritrisnayanti.000webhostapp.com/aritrisnayanti078/UpdateData.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      noInduk: this.state.noInduk,
      nama: this.state.nama,
      telp: this.state.telp,
      alamat: this.state.alamat,
      namaPrestasi: this.state.namaPrestasi,
      tingkat: this.state.tingkat,
      tahun: this.state.tahun,
    })
  }).then((response) => response.json())
    .then((responseJson) => {
        Alert.alert(responseJson);
    }).catch((error) => {
       console.error(error);
    });
  }

  DeleteDataRecord = () => {
             this.setState({ ActivityIndicator_Loading: true }, () => {
               fetch('http://nikomangaritrisnayanti.000webhostapp.com/aritrisnayanti078/HapusData.php', {
               method: 'POST',
               headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                 noInduk: this.state.noInduk
               })

               }).then((response) => response.json())
               .then((responseJson) => {
                 this.setState({ ActivityIndicator_Loading: false });
                 // Menampilkan pesan yang ada di query
                 Alert.alert(responseJson);
                 this.props.navigation.navigate('Data');
               }) .catch((error) => {
                  console.error(error);
                  this.setState({ ActivityIndicator_Loading: false });
               });
               });
           }

render() {
  return (
   <View style={styles.containerMain}>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 7 }}>EDIT DATA</Text>
      <TextInput
        placeholder="Nama"
        value={this.state.nama}
        onChangeText={TextInputValue => this.setState({ nama: TextInputValue })}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
      />
      <TextInput
        placeholder="Telp"
        value={this.state.telp}
        onChangeText={TextInputValue => this.setState({ telp: TextInputValue })}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
      />
      <TextInput
        placeholder="Alamat"
        value={this.state.alamat}
        onChangeText={TextInputValue => this.setState({ alamat: TextInputValue })}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
      />
      <TextInput
        placeholder="Prestasi"
        value={this.state.namaPrestasi}
        onChangeText={TextInputValue => this.setState({ namaPrestasi: TextInputValue })}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
      />
      <TextInput
        placeholder="Tingkat"
        value={this.state.tingkat}
        onChangeText={TextInputValue => this.setState({ tingkat: TextInputValue })}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
      />
      <TextInput
        placeholder="Tahun"
        value={this.state.tahun}
        onChangeText={TextInputValue => this.setState({ tahun: TextInputValue })}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
      />
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.TouchableOpacityStyle}
        onPress={() => this.UpdateDataRecord()}
      >
        <Text style={styles.TextStyle}> UPDATE DATA </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.TouchableOpacityStyle}
        onPress={() => this.DeleteDataRecord()}
      >
        <Text style={styles.TextStyle}> DELETE DATA </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.TouchableOpacityStyle}
        onPress={() => this.props.navigation.navigate('Home')}
      >
        <Text style={styles.TextStyle}> CANCEL </Text>
      </TouchableOpacity>
   </View>
      );
    }
}
export default EditDataActivity;

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
  },
  Header: {
     flex: 1,
     backgroundColor: '#2962FF'
  },
  TextInputStyleClass: {
    textAlign: 'center',
    width: '70%',
    marginBottom: 7,
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,
  },

  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '70%',
    backgroundColor: '#00BCD4'
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }
});
