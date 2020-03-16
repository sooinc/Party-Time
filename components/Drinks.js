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
import { fetchPlaces } from '../store/places';

class Drinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      currentIndex: 0,
      staticIndex: 0,
      latitude: 0,
      longitude: 0,
    };
    this.imageUrl = this.imageUrl.bind(this);
    this.findId = this.findId.bind(this);
    this.onPressHandler = this.onPressHandler.bind(this);
    this.goHandler = this.goHandler.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ latitude });
        this.setState({ latitude });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  onPressHandler() {
    clearInterval(this.intervalId);
    this.findCoordinates();
    let images = this.imageUrl(this.props.drinks);
    let id = this.findId(this.props.drinks, images[this.state.currentIndex]);
    this.props.fetchDetailedDrinksDispatch(id);
    this.props.fetchPlacesDispatch(this.state.latitude, this.state.longitude);
    this.setState({ isVisible: true });
  }

  randomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  timer() {
    let random = this.randomNum(99);

    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });
    if (this.state.currentIndex - this.state.staticIndex === 20) {
      clearInterval(this.intervalId);
    }
    if (this.state.currentIndex === 99) {
      this.setState({ currentIndex: random });
    }
    // if (
    //   this.state.currentIndex === 99 &&
    //   this.state.currentIndex - this.state.staticIndex === 20
    // ) {
    //   clearInterval(this.intervalId);
    // }
  }

  goHandler(id) {
    let random = this.randomNum(99);
    this.setState({ staticIndex: random });
    this.setState({ currentIndex: random });
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
    const {
      detailed,
      places1,
      places2,
      places3,
      places4,
      places5,
    } = this.props;

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
        <RecipePage
          isVisible={this.state.isVisible}
          onClose={() => this.setState({ isVisible: false })}
          detailed={detailed}
          places1={places1}
          places2={places2}
          places3={places3}
          places4={places4}
          places5={places5}
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
  places1: state.places.places1,
  places2: state.places.places2,
  places3: state.places.places3,
  places4: state.places.places4,
  places5: state.places.places5,
});

const mapDispatch = dispatch => ({
  fetchDetailedDrinksDispatch: id => dispatch(fetchDetailedDrinks(id)),
  fetchPlacesDispatch: (lat, long) => dispatch(fetchPlaces(lat, long)),
});

const connectedDrinks = connect(mapState, mapDispatch)(Drinks);
export default connectedDrinks;
