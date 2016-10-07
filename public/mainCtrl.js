angular.module("todoApp")
.controller("mainCtrl", function($scope, mainServ){
  $scope.todo = mainServ.dostuff;

  $scope.stuffgetter = function(){
      mainServ.getstuff()
      .then(function(response){
          console.log(response);
          $scope.data = response;
      });
    };
    $scope.stuffgetter();


});
