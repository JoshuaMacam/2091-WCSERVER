const express = require('express');
const app = express();

// set the view engine to Pug
app.set('view engine', 'ejs');

app.use(express.static('public'));

// serve static files
app.use(express.static('public'));

// render the index page
app.get('/', (req, res) => {
  res.render('index', { title: 'My EJS App' });
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
