angular.module("todoApp")
    .controller("mainCtrl", function($scope, mainServ) {

            $scope.todos;
            $scope.focused = false;

            $scope.showTodo = function() {
                mainServ.getTodo()
                    .then(function(response) {
                        $scope.todo = response;
                    });
            };
            $scope.showTodo();

            $scope.addTodo = function(todo) {
                console.log(todo);
                var addObj = {
                     description:todo
                 };
            mainServ.newTodo(addObj)
                .then(function(response) {
                    console.log(response);
                    $scope.thingtodo = "";
                    $scope.showTodo();
                })
        };

        $scope.changeTodo = (function(todo) {
                mainServ.changeTodo(todo)
                    .then(function(response) {
                        $scope.showTodo();
                    })
            });

            $scope.deleteTodo = (function(todo) {
                    mainServ.deleteTodo(todo)
                        .then(function(response) {
                            $scope.showTodo();
                        })
                });

            });
