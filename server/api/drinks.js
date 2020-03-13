const router = require('express').Router({ mergeParams: true });
const { Drink } = require('../db');
module.exports = router;

// /api/cart
// router.get('/', async (req, res, next) => {
//   try {
//     const order = await req.cart.get({
//       include: [
//         {
//           model: Product,
//           through: {attributes: ['quantity']},
//           order: [['createAt', 'DESC']]
//         }
//       ]
//     })

//     if (order) {
//       res.json(order.products)
//     } else {
//       res.json([])
//     }
//   } catch (error) {
//     next(error)
//   }
// })
