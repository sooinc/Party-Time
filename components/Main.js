import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
// import { fetchDrinks } from '../store/drinks';

class Main extends React.Component {
  render() {
    let { drinks } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>Hi</Text>
      </View>
    );
  }
}

// const mapState = state => {
//   return {
//     drinks: state.drinks,
//   };
// };

// const mapDispatch = dispatch => {
//   return {
//     fetchDrinksDispatch: () => dispatch(fetchDrinks()),
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const ConnectedMain = connect(mapState, mapDispatch)(Main);
export default Main;
