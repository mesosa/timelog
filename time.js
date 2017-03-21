angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'angularMoment']);
angular.module('ui.bootstrap.demo').controller('DatepickerDemoCtrl', function($scope) {
 
  // start date
  $scope.startDateToday = function() {
    $scope.startDate = new moment('HH:mm');
  };
  $scope.startDateToday();
 
  $scope.todos = [
    ];


    $scope.dateToday = function() {
      $scope.todayDate = new moment().format('DD-MMM-YYYY');

    };

    $scope.dateToday();

   $scope.addTodo = function(start,end) {
var startTime=moment(start, "HH:mm");
var endTime=moment(end, "HH:mm");
var duration = moment.duration(endTime.diff(startTime));
var hours = parseInt(duration.asHours());
var minutes = parseInt(duration.asMinutes())-hours*60;

      $scope.todos.push(

        {text:$scope.todayDate},
        {text:"Titel: " + $scope.todoText},
        {text:"When " + $scope.startDate + "-" + $scope.endDate},
        {text: "Total: " + $scope.getDuration(start,end)
      });


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

