(function () {
    'use strict';

    angular
        .module('app')
        .controller('MovieController', MovieController);

    MovieController.$inject = ['$scope', '$http'];
    function MovieController($scope, $http) {
        var vm = this;
        vm.table = table;
        vm.user = user;
        vm.load = load;

        function table(input){
            vm.tableOptions = input;
        }

        function user(input){
            switch(input){
                case 2:
                    vm.userOptions='user2.json';
                    break;
                case 558:
                    vm.userOptions='user558.json';
                    break;
                case 48:
                    vm.userOptions='user48.json';
                    break;
            }
            console.log("the error is not here");
            load(vm.userOptions);
        }

        function load(input) {
            console.log("something is not fishy");
            console.log(input);
            $http.get(input).success(function(data){
                console.log("httpget success");
                vm.data = data;
                console.log('data loaded');
                table('r');
            });
        }

        user(2);

        // $http.get('user2.json').success(function(data){
        //     console.log("data loaded");
        //     vm.data = data;
        //     table('r');
        //     console.log(vm.data);
        // })
    }

})();