var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    
    console.log("Hello World from controller");

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
    $scope.eventlist = eventlist;

}]);