var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/eventlist', function(req, res) {
	console.log("I received a GET request");

	event1 = {
    	user: 'stewart',
    	eventdate: '08/02/2016',
    	eventtype: 'glucose',
    	eventvalue: 5
    };

    event2 = {
    	user: 'stewart',
    	eventdate: '08/02/2016',
    	eventtype: 'carbs',
    	eventvalue: 12
    };

    event3 = {
    	user: 'stewart',
    	eventdate: '08/02/2016',
    	eventtype: 'basal',
    	eventvalue: 28
    };

    var eventlist = [event1, event2, event3];
    res.json(eventlist);
});

app.listen(3000);
console.log("Server running on port 3000");