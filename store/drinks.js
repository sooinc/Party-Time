import axios from 'axios';
import { allCocktails } from '../data-methods';

const GOT_DRINKS = 'GOT_DRINKS';
const GOT_DETAILED_DRINKS = 'GOT_DETAILED_DRINKS';

export const gotDrinks = drinkList => ({
  type: GOT_DRINKS,
  drinkList,
});

export const gotDetailedDrinks = drinks => ({
  type: GOT_DETAILED_DRINKS,
  drinks,
});

export const fetchDrinks = () => {
  return async dispatch => {
    try {
      // let { data } = await axios.get(
      //   'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
      // );
      let data = allCocktails();
      dispatch(gotDrinks(data));
    } catch (err) {
      console.log('not able to load drinks', err);
    }
  };
};

export const fetchDetailedDrinks = drinkId => {
  return async dispatch => {
    try {
      let { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
      );
      dispatch(gotDetailedDrinks(data));
    } catch (err) {
      console.log('not able to load the details', err);
    }
  };
};

const initial = {
  drinkList: {},
  drinks: [],
  detailed: {},
};
const drinksReducer = (state = initial, action) => {
  switch (action.type) {
    case GOT_DRINKS:
      return {
        ...state,
        drinkList: action.drinkList,
        drinks: action.drinkList.drinks,
      };
    case GOT_DETAILED_DRINKS:
      return {
        ...state,
        detailed: action.drinks.drinks[0],
      };
    default:
      return state;
  }
};

export default drinksReducer;
