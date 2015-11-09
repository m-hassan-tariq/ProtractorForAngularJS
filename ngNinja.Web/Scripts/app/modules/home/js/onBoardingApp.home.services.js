'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

(function () {

    // Definitions: Declare modules without a variable using the setter syntax.
    angular
        .module('onBoardingApp.home.services', [])
        //Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
        .factory('homeService', homeService);

    // UnSafe from Minification: Avoid using the shortcut syntax of declaring dependencies without using a minification-safe approach.
    // Use $inject to manually identify your dependencies for Angular components.
    homeService.$inject = ['webApi'];

    function homeService(webApi) {

        // Single Responsibility: Factories should have a single responsibility, that is encapsulated by its context.
        // Once a factory begins to exceed that singular purpose, a new factory should be created.
        var factory = {
            // Function Declarations to Hide Implementation Details: Use function declarations to hide implementation details. Keep your accessible members of
            // the factory up top. Point those to function declarations that appears later in the file
            getAllSecondaryCandidates: getAllSecondaryCandidates
        };

        // Singletons: Factories are singletons and return an object that contains the members of the service.
        return factory;

        ////////////////////////////Implementation//////////////////////////////////////

        function getAllSecondaryCandidates() {
            return webApi.nonParameter('GET', '/Home/GetSecondaryCandidateData');
        }

    };

})();
