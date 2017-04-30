(function () {
    'use strict';


    angular.module('app')
        .controller('RegisterController',RegisterController);

    RegisterController.$inject = ['UserService','$location','$rootScope'];
    function RegisterController(UserService,$location,$rootScope) {
        var vm = this;

        vm.register = register;

        function register() {
            UserService.Create(vm.user)
                .then(function(response) {
                    if(response.success) {
                        alert('Registration Successful');
                        $location.path('/login');
                    }
                    else {
                        alert('Registration Unsuccessful');
                    }
                });
        }
    }

}) ();