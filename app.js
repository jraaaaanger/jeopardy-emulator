var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/build'));

app.set('build', __dirname + '/build');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('build/index.html');
});

app.listen(3000, function () {
  console.log('App running on Port 3000!');
});
