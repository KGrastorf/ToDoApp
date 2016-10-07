angular.module("todoApp")
    .service("mainServ", function($http) {
        this.dostuff = [{
            task: "shop"
        }, {
            task: "poop"
        }, {
            task: "eat"
        }];
        this.getstuff= function(){
          return $http({
              method: "GET",
              url: "/todo"
          }).then(function(response) {
              console.log(response.data.results);
              return response.data.results;
          });
      };
    });
