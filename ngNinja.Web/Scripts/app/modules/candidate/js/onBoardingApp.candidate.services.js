'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

(function () {

    // This will serve as abstraction layer for underlying implemntation, Just pass URL, Request Type, Parameter Object
    // FYI -> Its time to get our hand dirty on actual http request, so introduce new Get method in WebAPI home controller
    angular
        .module('onBoardingApp.candidate.services', [])
        //Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
        .factory('candidateService', candidateService);

    // UnSafe from Minification: Avoid using the shortcut syntax of declaring dependencies without using a minification-safe approach.
    // Use $inject to manually identify your dependencies for Angular components.
    candidateService.$inject = ['webApi'];

    function candidateService(webApi) {

        // Single Responsibility: Factories should have a single responsibility, that is encapsulated by its context.
        // Once a factory begins to exceed that singular purpose, a new factory should be created.
        var factory = {
            getAllCandidates: getAllCandidates
        };

        // Singletons: Factories are singletons and return an object that contains the members of the service
        return factory;

        ////////////////////////////Implementation//////////////////////////////////////

        function getAllCandidates() {
            return webApi.nonParameter('GET', '/Home/GetCandidateData');
        }

    };

})();
