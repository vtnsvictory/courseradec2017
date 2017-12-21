(function (){
'use strict'

//Wvar a="hello";

angular.module('myFirstApp',[])

.controller('MyFirstController',function($scope){
$scope.name ="Vijendra";
$scope.sayHello = function(){
  return "Hello Coursera !!";
};
});
})();
