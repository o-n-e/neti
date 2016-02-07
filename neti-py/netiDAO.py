import string
 
class NetiDAO(object):
 
#Initialize our DAO class with the database and set the MongoDB collection we want to use.
    def __init__(self, database):
        self.db = database
        self.userevents = database.userevents
 
    def find_events(self):
        l = []
        for each_event in self.userevents.find():
            l.append({'user':each_event['user'], 'eventdate':each_event['eventdate'], 'eventtype':each_event['eventtype'], 'eventvalue':each_event['eventvalue']})
 
        return l
 
    def insert_userevent(self, newnuser, neweventdate, neweventtype, neweventvalue):
        newdoc = {'user':newnuser, 'eventdate':neweventdate, 'eventtype':neweventtype, 'eventvalue':neweventvalue}
        self.userevents.insert(newdoc)