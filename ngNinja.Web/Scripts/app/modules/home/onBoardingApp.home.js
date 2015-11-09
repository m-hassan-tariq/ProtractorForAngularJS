'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

(function () {

    // Definitions: Declare modules without a variable using the setter syntax.
    angular
        .module('onBoardingApp.home', ['onBoardingApp.home.controllers', 'onBoardingApp.home.services'])
        // Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
        .config(config);

    function config($stateProvider) {

    }

})();
