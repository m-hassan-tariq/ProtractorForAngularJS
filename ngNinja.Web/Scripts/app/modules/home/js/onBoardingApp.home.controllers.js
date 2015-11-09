'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

(function () {

    // Definitions: Declare modules without a variable using the setter syntax.
    angular
        .module('onBoardingApp.home.controllers', [])
        //Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
        .controller('HomeController', homeController);

    // UnSafe from Minification: Avoid using the shortcut syntax of declaring dependencies without using a minification-safe approach.
    // Use $inject to manually identify your dependencies for Angular components.
    homeController.$inject = ['homeService', 'getSecondaryCandidateService'];

    function homeController(homeService, getSecondaryCandidateService) {
        //controllerAs with vm: Use a capture variable for this when using the controllerAs syntax. Choose a consistent variable name such as vm, which stands for ViewModel
        var vm = this;
        
        // Controller Activation Promises: Resolve start-up logic for a controller in an init function.
        init();

        function init() {
            vm.lazyLoadParams = [
                '/Scripts/app/shared/directive/candidateGrid.js'
            ];
            vm.showAction = false;
            vm.type = "Admin Page";

            // Function Declarations to Hide Implementation Details: Use function declarations to hide implementation details. Keep your accessible members of
            // the factory up top. Point those to function declarations that appears later in the file
            vm.candidates = getSecondaryCandidateService;
            //getCandidates();
        }

        ////////////////////////////Implementation//////////////////////////////////////

        // Invoke your service layer for this module
        function getCandidates() {
            return homeService.getAllSecondaryCandidates()
               .then(function (data) {
                   return vm.candidates = data;
               });
        }

    };

})();
