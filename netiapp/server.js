var express = require('express');
var app = express();
var mongojs = require('mongojs')
var db = mongojs('neti', ['userevents']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/eventlist', function (req, res) {
  console.log('I received a GET request');

	db.userevents.find(function (err, docs) {
	    console.log(docs);
	    res.json(docs);
	});
});

app.post('/eventlist', function (req, res) {
  console.log(req.body);
  db.userevents.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/eventlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.userevents.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/eventlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.userevents.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/eventlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.user);
  db.userevents.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {user: "56b794cecece3f3546a4bc1f", eventdate: req.body.eventdate, eventtype: req.body.eventtype, eventvalue: req.body.eventvalue}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(3000);
console.log("Server running on port 3000");