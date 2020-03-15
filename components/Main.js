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

import Drinks from './Drinks';
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
          <Text style={styles.text}>Party Time</Text>
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
    backgroundColor: 'black',
  },
  textContainer: {
    flex: 1,
    marginTop: 300,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

const connectedMain = connect(mapState, mapDispatch)(Main);
export default connectedMain;
