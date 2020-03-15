import * as React from 'react';
import { connect } from 'react-redux';
import RecipePage from './RecipePage';
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { fetchDetailedDrinks } from '../store/drinks';

class Drinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
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
    this.setState({ isVisible: true });
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
    this.setState({ currentIndex: 99 });
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
      <View>
        <TouchableOpacity onPress={() => this.onPressHandler()}>
          <Image
            key={Math.random().toString()}
            source={{ uri: images[this.state.currentIndex] }}
            style={styles.images}
          />
        </TouchableOpacity>
        <View style={styles.button}>
          <Button mode="contained" color="#726E75" onPress={this.goHandler}>
            Go!
          </Button>
        </View>

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
          isVisible={this.state.isVisible}
          onClose={() => this.setState({ isVisible: false })}
          detailed={detailed}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  images: {
    width: 200,
    height: 200,
  },
  button: {
    paddingTop: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
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
