angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'angularMoment']);
angular.module('ui.bootstrap.demo').controller('DatepickerDemoCtrl', function($scope) {
 
  // start date
  $scope.startDateToday = function() {
    $scope.startDate = new moment('HH:mm');
  };
  $scope.startDateToday();
 
  $scope.todos = [
    ];


   $scope.addTodo = function(start,end) {
var startTime=moment(start, "HH:mm");
var endTime=moment(end, "HH:mm");
var duration = moment.duration(endTime.diff(startTime));
var hours = parseInt(duration.asHours());
var minutes = parseInt(duration.asMinutes())-hours*60;
      $scope.todos.push({text:$scope.todoText, done:true}, {text:$scope.getDuration(start,end)});

      $scope.todoText = '';
    };
 
  // end date
  $scope.endDateToday = function() {
    $scope.endDate = new moment('HH:mm');
  };
  $scope.endDateToday();
 
 
 
  $scope.formats = ['HH:mm'];
  $scope.format = $scope.formats[2];
 
  // duration
  $scope.getDuration = function(start, end) {
 

var startTime=moment(start, "HH:mm");
var endTime=moment(end, "HH:mm");
var duration = moment.duration(endTime.diff(startTime));
var hours = parseInt(duration.asHours());
var minutes = parseInt(duration.asMinutes())-hours*60;
console.log(hours + ' hour and '+ minutes+' minutes.');
    try {
      return (hours + ' hour and '+ minutes+' minutes.');
    } catch (e) {
      return "Cant evaluate"
    }
  };
 

     $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };

});

