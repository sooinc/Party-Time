const express = require('express');
// const path = require('path');
const morgan = require('morgan');
const compression = require('compression');

const db = require('./db/db');
const PORT = 3000;
const app = express();
module.exports = app;

app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api'));

// app.use(express.static(path.join(__dirname, '..', 'public')))

// // any remaining requests with an extension (.js, .css, etc.) send 404
// app.use((req, res, next) => {
//   if (path.extname(req.path).length) {
//     const err = new Error('Not found');
//     err.status = 404;
//     next(err);
//   } else {
//     next();
//   }
// });

//   // sends index.html
//   app.use('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public/index.html'))
//   })

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

db.sync().then(() => {
  console.log('db synced');
  app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}

    http://localhost:${PORT}
    
    `)
  );
});
