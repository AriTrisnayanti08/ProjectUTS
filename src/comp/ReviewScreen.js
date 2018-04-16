import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Button,
  List,
  ListItem,
  RefreshControl
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

class ReviewScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Title />
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      ActivityIndicator_Loading: false,
    };
  }

GetIDFunction=(noInduk, nama, telp, alamat, namaPrestasi, tingkat, tahun) => {
    this.props.navigation.navigate('Edit', {
      noInduk: noInduk,
      nama: nama,
      telp : telp,
      alamat: alamat,
      namaPrestasi: namaPrestasi,
      tingkat: tingkat,
      tahun: tahun,
    });
  }

  componentDidMount() {
    const url = 'http://nikomangaritrisnayanti.000webhostapp.com/aritrisnayanti078/getData.php';
    this.setState({ loading: true });
    fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('comp');
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false,
          ActivityIndicator_Loading: false
        });
      }
    );
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) =>
            <View style={styles.ListItem}>
            <Text style={styles.ListFirst}>No Induk {'\t'}: {item.noInduk}</Text>
            <Text>Nama {'\t'}: {item.nama}</Text>
            <Text>Telp {'\t'}: {item.telp}</Text>
            <Text>Alamat {'\t'}: {item.alamat}</Text>
            <Text>Prestasi {'\t'}: {item.namaPrestasi}</Text>
            <Text>Tingkat {'\t'}: {item.tingkat}</Text>
            <Text>Tahun {'\t'}: {item.tahun}</Text>
            <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'center' }} >
            {
              this.state.ActivityIndicator_Loading ?
              <ActivityIndicator
              color='#7E57C2'
              size='large'
              style={styles.ActivityIndicatorStyle}
              /> : null
            }
              <View style={{ marginTop: 5, marginRight: 10, marginBottom: 5 }} >
                <Button
                  title="Edit Data"
                  color="#EF5350"
                  onPress={this.GetIDFunction.bind(
                           this, item.noInduk,
                            item.nama,
                            item.telp,
                            item.alamat,
                            item.namaPrestasi,
                            item.tingkat,
                            item.tahun,
                            )}
                />
              </View>
              </View>
            </View>
        }
        keyExtractor={item => item.nama}
        />
      </View>
    );
  }
}
export default ReviewScreen;

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
  ListItem: {
    padding: 5,
    flex: 1,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 15,
    backgroundColor: '#90CAF9',
    borderRadius: 15
  }
});
