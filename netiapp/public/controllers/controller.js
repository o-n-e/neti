var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

var refresh = function() {    
    $http.get('/eventlist').success(function(response) {
    	console.log('I got the data I requested');
    	$scope.eventlist = response;
      $scope.deselect();
    });
};

refresh();

$scope.addEvent = function() {
  console.log($scope.event);
  $scope.event.user = '56b794cecece3f3546a4bc1f';
  $http.post('/eventlist', $scope.event).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/eventlist/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/eventlist/' + id).success(function(response) {
    $scope.event = response;
  });
};  

$scope.update = function() {
  console.log($scope.event._id);
  $http.put('/eventlist/' + $scope.event._id, $scope.event).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.event = "";
}



$scope.selectedDt = '';

$scope.submit = function() {
    var dt = new Date($scope.selectedDt);
    alert(dt);
}


}]);

var dateTimePicker = function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attrs, ngModelCtrl) {
            var parent = $(element).parent();
            var dtp = parent.datetimepicker({
                format: "lll",
                showTodayButton: true
            });
            dtp.on("dp.change", function (e) {
                ngModelCtrl.$setViewValue(moment(e.date).format("lll"));
                scope.$apply();
            });
        }
    };
};

myApp.directive('dateTimePicker', dateTimePicker);
