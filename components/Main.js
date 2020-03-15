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

// import RecipePage from './RecipePage';
import Drinks from './Drinks';
import { fetchDrinks } from '../store/drinks';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      // showModal: false,
    };
  }

  componentDidMount() {
    this.props.fetchDrinksDispatch();
  }

  // onPressHandler(id) {
  //   this.setState({ showModal: true });
  //   this.props.fetchDetailedDrinksDispatch(id);
  // }

  render() {
    const { drinks } = this.props.drinkList;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Party Time</Text>
        </View>
        <View>
          <Drinks drinks={drinks} />
        </View>

        {/* {drinks.map(drink => (
            <Button
              title={`${drink.strDrink}`}
              key={drink.idDrink}
              onPress={() => this.onPressHandler(drink.idDrink)}
            />
          ))} */}

        {/* <RecipePage
          visible={this.state.showModal}
          onClose={() => this.setState({ showModal: false })}
          detailed={detailed}
        /> */}
      </View>
    );
  }
}

const mapState = state => ({
  drinkList: state.drinkList,
  // detailed: state.drinkList.detailed,
});

const mapDispatch = dispatch => ({
  fetchDrinksDispatch: () => dispatch(fetchDrinks()),
  // fetchDetailedDrinksDispatch: id => dispatch(fetchDetailedDrinks(id)),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

const connectedMain = connect(mapState, mapDispatch)(Main);
export default connectedMain;
