'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).
(function () {

    // Module Dependencies: The application root module depends on the app specific feature modules and any shared or reusable modules.
    // Definitions: Declare modules without a variable using the setter syntax.
    angular
        .module('onBoardingApp', [
            'onBoardingApp.Core',
            'onBoardingApp.Module'
        ]);

    // Injected Dependency list of All Core 3rd Party Libraries
    angular
        .module('onBoardingApp.Core', [
            'ui.router',
            'oc.lazyLoad'
        ]);

    // Injected Dependency list of All Modules
    angular
        .module('onBoardingApp.Module', [
            'onBoardingApp.home',
            //'onBoardingApp.candidate',
            'onBoardingApp.layout'
        ]);

})();
