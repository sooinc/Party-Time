import axios from 'axios';
import APIKEY from '../secrets';

const GOT_PLACES = 'GOT_PLACES';

export const gotPlaces = places => ({
  type: GOT_PLACES,
  places,
});

export const fetchPlaces = (lat, long) => {
  return async dispatch => {
    try {
      let { data } = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?type=liquor_store&location=${lat},${long}
          &radius=8047&key=${APIKEY}`
      );
      dispatch(gotPlaces(data));
    } catch (err) {
      console.log('not able to load places', err);
    }
  };
};

const initial = {
  places1: {},
  places2: {},
  places3: {},
  places4: {},
  places5: {},
};

const placesReducer = (state = initial, action) => {
  switch (action.type) {
    case GOT_PLACES:
      return {
        ...state,
        places1: action.places.results[0],
        places2: action.places.results[1],
        places3: action.places.results[2],
        places4: action.places.results[3],
        places5: action.places.results[4],
      };

    default:
      return state;
  }
};

export default placesReducer;
