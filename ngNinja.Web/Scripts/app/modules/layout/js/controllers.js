'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

(function () {

    // Definitions: Declare modules without a variable using the setter syntax.
    angular
        .module('onBoardingApp.layout.controllers', [])
        //Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
        .controller('ShellController', shellController);

    // UnSafe from Minification: Avoid using the shortcut syntax of declaring dependencies without using a minification-safe approach.
    // Use $inject to manually identify your dependencies for Angular components.
    shellController.$inject = ['$scope'];

    function shellController($scope) {

    };

})();
