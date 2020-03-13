const { green, red } = require('chalk');
const { db, Drink } = require('../server/db');

const drinks = [
  {
    name: 'Dry Martini',
    ingredients: [
      '2 1/2 oz Gin',
      '1/2 oz Dry vermouth',
      '1 dash Orange bitters',
      'Lemon Peel for garnish',
    ],
    recipe: [
      '1) Add all the ingredients into a mixing glass with ice and stir until very cold.',
      '2) Strain into a chilled cocktail glass.',
      '3)Garnish with a lemon twist.',
    ],
    level: 'easy',
    servingSize: 2,
    image:
      'https://images.assetsdelivery.com/compings_v2/dondesigns/dondesigns1105/dondesigns110500045.jpg',
    category: 'Classic',
  },
  {
    name: 'Dry Martini',
    ingredients: [
      '2 1/2 oz Gin',
      '1/2 oz Dry vermouth',
      '1 dash Orange bitters',
      'Lemon Peel for garnish',
    ],
    recipe: [
      '1) Add all the ingredients into a mixing glass with ice and stir until very cold.',
      '2) Strain into a chilled cocktail glass.',
      '3)Garnish with a lemon twist.',
    ],
    level: 'easy',
    servingSize: 2,
    image:
      'https://images.assetsdelivery.com/compings_v2/dondesigns/dondesigns1105/dondesigns110500045.jpg',
    category: 'Classic',
  },
  {
    name: 'Dry Martini',
    ingredients: [
      '2 1/2 oz Gin',
      '1/2 oz Dry vermouth',
      '1 dash Orange bitters',
      'Lemon Peel for garnish',
    ],
    recipe: [
      '1) Add all the ingredients into a mixing glass with ice and stir until very cold.',
      '2) Strain into a chilled cocktail glass.',
      '3)Garnish with a lemon twist.',
    ],
    level: 'easy',
    servingSize: 2,
    image:
      'https://images.assetsdelivery.com/compings_v2/dondesigns/dondesigns1105/dondesigns110500045.jpg',
    category: 'Classic',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      drinks.map(drink => {
        return Drink.create(drink);
      })
    );
    //   await Promise.all(
    //     projects.map(project => {
    //       return Project.create(project);
    //     })
    //   );

    //   await Promise.all(
    //     robotProject.map(association => {
    //       return RobotProject.create(association);
    //     })
    //   );
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch(err => {
      console.error(red('Seeding not succesful.'));
      console.error(err);
      db.close();
    });
}
