const seedData = require('./data.json');

export const allCocktails = () => {
  return seedData;
};

/* in the front component - ONCE the image/name has been selected. we can identify the ID.

Once the ID has been secured, we can make ANOTHER REAL axios call 

to get the ingredients and the instructions */
