import string
 
class NetiDAO(object):
 
#Initialize our DAO class with the database and set the MongoDB collection we want to use.
    def __init__(self, database):
        self.db = database
        self.userevents = database.userevents
 
    def find_events(self):
        l = []
        for each_event in self.userevents.find():
            l.append({'user':each_event['user'], 'eventdate':each_event['eventdate'], 'eventtype':each_event['eventtype'], 'value':each_event['value']})
 
        return l
 
    def insert_event(self, newnuser, neweventdate, neweventtype, newvalue):
        newdoc = {'user':newnuser, 'eventdate':neweventdate, 'eventtype':neweventtype, 'value':newvalue}
        self.userevents.insert(newdoc)