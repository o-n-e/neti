import bottle
import pymongo
import netiDAO
 
#This is the default route, our index page. Here we need to read the documents from MongoDB.
@bottle.route('/')
def neti_index():
    userevents_list = eventslist.find_events()
    return bottle.template('index', dict(userevents = userevents_list))
 
#We will post new entries to this route so we can insert them into MongoDB
@bottle.route('/newuserevent', method='POST')
def insert_userevent():
    user = bottle.request.forms.get("user")
    eventdate = bottle.request.forms.get("eventdate")
    eventtype = bottle.request.forms.get("eventtype")
    eventvalue = bottle.request.forms.get("eventvalue")

    eventslist.insert_userevent(user, eventdate, eventtype, eventvalue)
    bottle.redirect('/')
 
#This is to set up the connection.
 
#First, set up a connection string. My server is running on this computer, so localhost is OK.
connection_string = "mongodb://localhost"
#Next, let PyMongo know about the MongoDB connection we want to use. PyMongo will manage the connection pool.
connection = pymongo.MongoClient(connection_string)
#Now we want to set a context to the names database we created using the Mongo interactive shell.
database = connection.neti
#Finally let our data access object class we built, which acts as our data layer, know about this.
eventslist = netiDAO.NetiDAO(database)
 
bottle.debug(True)
bottle.run(host='localhost', port=8082)