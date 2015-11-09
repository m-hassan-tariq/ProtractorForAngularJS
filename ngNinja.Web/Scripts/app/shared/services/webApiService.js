// This will be shared service which will be consumed by all modules for executing CRUD operation,
// Request Type, URL, Parameter Object will be passed to this shared service, so it will make code more maintainable
// readble and scaleble. If we dont go through this method then we have to use $http.get() or $http.post method
// every where in services files of each module, content negotiation issues can be simply handled over here,
// If you want to append anything with each URL like 'Http:\\Jobcorp\' then instead of copy it on every service file
// just hardcode this thing in this file and append URL from thier respective services.
// We dont need to mention protocol and hostname now in every URL request.

'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

(function () {

    // Getters: When using a module, avoid using a variable and instead use chaining with the getter syntax.
    angular
        .module('onBoardingApp')
        //Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
        .factory("webApi", webApi);

    // Separate Data Calls: Refactor logic for making data operations and interacting with data to a factory. Make data services
    // responsible for XHR calls, local storage, stashing in memory, or any other data operations.

    // UnSafe from Minification: Avoid using the shortcut syntax of declaring dependencies without using a minification-safe approach.
    // Use $inject to manually identify your dependencies for Angular components.
    webApi.$inject = ['$http', '$templateCache', '$q'];

    function webApi($http, $templateCache, $q) {

        // Single Responsibility: Factories should have a single responsibility, that is encapsulated by its context.
        // Once a factory begins to exceed that singular purpose, a new factory should be created.
        var factory = {
            // Function Declarations to Hide Implementation Details: Use function declarations to hide implementation details. Keep your
            // accessible members of the factory up top. Point those to function declarations that appears later in the file
            withParameter: withParameter,
            nonParameter: nonParameter
        };

        // Singletons: Factories are singletons and return an object that contains the members of the service.
        return factory;

        ////////////////////////////Implementation//////////////////////////////////////

        function withParameter(methodType, webApiUrl, parameterObject) {
            var deferred = $q.defer();
            $http({
                method: methodType,
                url: webApiUrl, //window.location.protocol + '//' + window.location.host + window.location.pathname +
                data: parameterObject,
                cache: $templateCache
            })
            .success(deferred.resolve)
            .error(deferred.resolve);
            return deferred.promise;
        }

        function nonParameter(methodType, webApiUrl) {
            var deferred = $q.defer();
            $http({
                method: methodType,
                url: webApiUrl,
                cache: $templateCache
            })
            .success(deferred.resolve)
            .error(deferred.resolve);
            return deferred.promise;
        }
    };

})();
