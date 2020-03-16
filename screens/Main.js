import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import FirebaseWrapper from '../firebase/firebase';

import Drinks from '../components/Drinks';
import { fetchDrinks } from '../store/drinks';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchDrinksDispatch();
  }

  render() {
    const { drinks } = this.props.drinkList;

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>PARTY TIME</Text>
        </View>
        <View style={styles.imageContainer}>
          <Drinks drinks={drinks} />
        </View>
      </View>
    );
  }
}

const mapState = state => ({
  drinkList: state.drinkList,
});

const mapDispatch = dispatch => ({
  fetchDrinksDispatch: () => dispatch(fetchDrinks()),
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#948B89',
    marginTop: -50,
    height: 670,
    marginBottom: 0,
    width: '100%',
  },
  textContainer: {
    height: 300,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    height: 100,
    fontSize: 50,
    fontFamily: 'Futura-Medium',
  },
  imageContainer: {
    marginBottom: 200,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

const connectedMain = connect(mapState, mapDispatch)(Main);
export default connectedMain;
