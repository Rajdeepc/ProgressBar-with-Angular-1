var myApp = angular.module('progress', ['ui.bootstrap']);

(function(app){
"use strict";
app.controller('progressController',function ($scope) {

  $scope.dynamic = 10;
  $scope.max = 230;

  $scope.add10 = function(){
    $scope.dynamic = $scope.dynamic + 10;
  };
   $scope.add25 = function(){
    $scope.dynamic = $scope.dynamic + 25;
  };
   $scope.minus10 = function(){
     if($scope.dynamic > 0 ){
    $scope.dynamic = $scope.dynamic - 10;
     }
     else
       {
         $scope.dynamic = 0;
       }
  };
   $scope.minus25 = function(){
      if($scope.dynamic > 0 ){
    $scope.dynamic = $scope.dynamic - 25;
     }
     else
       {
         $scope.dynamic = 0;
       }
   
  };
  $scope.reset = function(){
    $scope.dynamic = 10;
  };
});
})(myApp);