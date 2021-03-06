﻿(function () {
    "use strict";

    angular.module("app")
        .controller("loginController", LoginController);

    LoginController.$inject = ["$scope", "$location"];

    function LoginController($scope, $location) {
        var vm = this;
        vm.$scope = $scope;
        vm.$location = $location;
        vm.$onInit = _onInit;
        vm.email = "";
        vm.password = "";
        vm.login = _login;

        function _onInit() {
            console.log("init login controller");
        }

        function _login() {
            vm.$location.path("home");
        }
    }
})();