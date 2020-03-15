import React from 'react';
import { connect } from 'react-redux';
import RecipePage from './RecipePage';
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { fetchDetailedDrinks } from '../store/drinks';

class Drinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  onPressHandler(id) {
    this.setState({ showModal: true });
    this.props.fetchDetailedDrinksDispatch(id);
  }

  imageUrl(drinks) {
    return drinks.map(drink => {
      return drink.strDrinkThumb;
    });
  }

  findId(arr, url) {
    let found = arr.filter(one => {
      if (one.strDrinkThumb === url) {
        return one.idDrink;
      }
    });
    return found[0].idDrink;
  }

  render() {
    let images = this.imageUrl(this.props.drinks);
    const { detailed } = this.props;

    return (
      <ScrollView>
        {images.map(image => {
          let key = this.findId(this.props.drinks, image);
          return (
            <View>
              <TouchableOpacity
                key={key}
                onPress={() => this.onPressHandler(key)}
              >
                <Image
                  key={Math.random().toString()}
                  source={{ uri: image }}
                  style={styles.images}
                />
              </TouchableOpacity>
            </View>
          );
        })}

        <RecipePage
          visible={this.state.showModal}
          onClose={() => this.setState({ showModal: false })}
          detailed={detailed}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  images: {
    width: 200,
    height: 200,
  },
});

const mapState = state => ({
  detailed: state.drinkList.detailed,
});

const mapDispatch = dispatch => ({
  fetchDetailedDrinksDispatch: id => dispatch(fetchDetailedDrinks(id)),
});

const connectedDrinks = connect(mapState, mapDispatch)(Drinks);
export default connectedDrinks;
