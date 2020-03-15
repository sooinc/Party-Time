import React from 'react';
import { connect } from 'react-redux';
import RecipePage from './RecipePage';
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import { fetchDetailedDrinks } from '../store/drinks';

class Drinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentIndex: 99,
    };
    this.imageUrl = this.imageUrl.bind(this);
    this.findId = this.findId.bind(this);
    this.onPressHandler = this.onPressHandler.bind(this);
    this.goHandler = this.goHandler.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 200);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  onPressHandler() {
    clearInterval(this.intervalId);
    let images = this.imageUrl(this.props.drinks);
    let id = this.findId(this.props.drinks, images[this.state.currentIndex]);
    this.props.fetchDetailedDrinksDispatch(id);
    this.setState({ showModal: true });
  }

  timer() {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
    });
    if (this.state.currentIndex < 1) {
      clearInterval(this.intervalId);
    }
  }
  goHandler(id) {
    // this.setState({ currentIndex: 0 });
    this.intervalId = setInterval(this.timer.bind(this), 200);
  }

  imageUrl(drinks) {
    return drinks.map(drink => {
      return drink.strDrinkThumb;
    });
  }

  findId(arr, url) {
    let foundObj = arr.filter(obj => {
      if (obj.strDrinkThumb === url) {
        return obj;
      }
    })[0];
    return foundObj.idDrink;
  }

  render() {
    let images = this.imageUrl(this.props.drinks);
    const { detailed } = this.props;

    return (
      <ScrollView>
        <TouchableOpacity onPress={() => this.onPressHandler()}>
          <Image
            key={Math.random().toString()}
            source={{ uri: images[this.state.currentIndex] }}
            style={styles.images}
          />
        </TouchableOpacity>
        <Button title="Go!" onPress={this.goHandler} />

        {/* {images.map(image => {
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
        })} */}

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
