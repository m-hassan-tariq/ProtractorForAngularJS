'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

(function () {

    // Getters: When using a module, avoid using a variable and instead use chaining with the getter syntax.
    angular
        .module('onBoardingApp')
        // Startup Logic Run: Any code that needs to run when an application starts should be declared in a factory or exposed via a function, and
        // injected into the run block.
        // Startup Logic Configuration: Inject code into module configuration that must be configured before running
        // the angular app. Ideal candidates include providers and constants

        // Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
        .config(configure)
        .run(runBlock);

    // UnSafe from Minification: Avoid using the shortcut syntax of declaring dependencies without using a minification-safe approach.
    // Use $inject to manually identify your dependencies for Angular components.
    runBlock.$inject = ['$state'];
    configure.$inject = ['$stateProvider'];

    function runBlock($state, breeze) {
        $state.go('adminHome');
    };

    function configure($stateProvider) {
        $stateProvider
            .state('adminHome', {
                url: '/',
                // Assigning Controllers: When a controller must be paired with a view and either component may be re-used by other controllers or views, define controllers
                // along with their routes. Note: If a View is loaded via another means besides a route, then use the ng-controller="Avengers as vm" syntax
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: '/Scripts/app/modules/home/views/onBoardingApp.home.html',
                // Route Resolve Promises: When a controller depends on a promise to be resolved before the controller is activated,
                // resolve those dependencies in the $routeProvider before the controller logic is executed.
                // If you need to conditionally cancel a route before the controller is activated, use a route resolver.
                resolve: {
                    // Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
                    getSecondaryCandidateService: getSecondaryCandidateService
                }
            })
            .state('allCandidates', {
                url: '/candidates',
                controller: 'CandidateController',
                controllerAs: 'vm',
                templateUrl: '/Scripts/app/modules/candidate/views/onBoardingApp.candidate.html',
                resolve: {
                    allCandidates: function ($ocLazyLoad) {
                        // You can include $ocLazyLoad and use the function load which returns a promise. It supports a single dependency or multiple dependencies (array).
                        return $ocLazyLoad.load([{
                            name: 'onBoardingApp.candidate',
                            files: ['/Scripts/app/modules/candidate/onBoardingApp.candidate.js'],
                            // You can define optional parameters to each module.
                            // {cache: false, timeout: 5000}
                            cache: false
                        }, {
                            name: 'onBoardingApp.candidate.controllers',
                            files: ['/Scripts/app/modules/candidate/js/onBoardingApp.candidate.controller.js'],
                            cache: false
                        },
                        {
                            name: 'onBoardingApp.candidate.services',
                            files: ['/Scripts/app/modules/candidate/js/onBoardingApp.candidate.services.js'],
                            cache: false
                        }]);
                    }
                }
            });

        function getSecondaryCandidateService(homeService) {
            return homeService.getAllSecondaryCandidates();
        }
    };

})();
