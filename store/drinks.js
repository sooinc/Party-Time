import axios from 'axios';

const GOT_DRINKS = 'GOT_DRINKS';

export const gotDrinks = drinks => ({
  type: GOT_DRINKS,
  drinks,
});

export const fetchDrinks = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/drinks');
      dispatch(gotDrinks(data));
    } catch (err) {
      console.log('not able to load drinks');
    }
  };
};

const drinksReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_DRINKS:
      return { drinks: action.drinks };
    default:
      return state;
  }
};

export default drinksReducer;
