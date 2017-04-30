(function () {
    'use strict';

    angular
        .module('app')
        .controller('MovieController', MovieController);

    MovieController.$inject = ['$scope', '$http'];
    function MovieController($scope, $http) {
        var vm = this;
        vm.table = table;

        function table(input){
            vm.options = input;
        }

        console.log("this controller actually works");

        $http.get('https://doc-04-44-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/2hn4l5fr442lvqrd5abo6atc0fnj8amc/1493503200000/16591925424228278205/*/0B998qvIZO8zHVElzMlJhNEszMnc?e=download').success(function(data){
            console.log("data loaded");
            vm.data = data;
            table('r');
            console.log(vm.data);
        })
    }

})();