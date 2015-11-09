'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

(function () {

    // Definitions: Declare modules without a variable using the setter syntax.
    angular
        .module('onBoardingApp.candidate.controllers',[])
        //Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
        .controller('CandidateController', candidateController);

    // UnSafe from Minification: Avoid using the shortcut syntax of declaring dependencies without using a minification-safe approach.
    // Use $inject to manually identify your dependencies for Angular components.
    candidateController.$inject = ['candidateService']; //, 'getCandidateService'

    function candidateController(candidateService) { //, getCandidateService
        //controllerAs with vm: Use a capture variable for this when using the controllerAs syntax. Choose a consistent variable name such as vm, which stands for ViewModel
        var vm = this;
        
        // Controller Activation Promises: Resolve start-up logic for a controller in an init function.
        init();

        function init() {
            // The directive usage is very similar to the service. The main interest here is that the content will be included and compiled once your modules have been loaded.
            // This means that you can use directives that will be lazy loaded inside the oc-lazy-load directive.
            // You can use variables to store parameters on controller and wrap html template code under <div oc-lazy-load="lazyLoadParams"></div>
            vm.lazyLoadParams = [
                '/Scripts/app/shared/directive/candidateGrid.js',
                '/Scripts/app/shared/directive/maxLengthForNumbers.js',
                '/Scripts/app/shared/directive/validemail.js'
            ];
            vm.tempValueForUnitTest = "testing123";
            vm.showAction = true;
            vm.currentEdit = {};

            // Function Declarations to Hide Implementation Details: Use function declarations to hide implementation details. Keep your accessible members of
            // the factory up top. Point those to function declarations that appears later in the file
            //vm.candidates = getCandidateService;
            vm.candidates = getCandidates();
            vm.findCandidate = findCandidate;
            vm.add = add;
            vm.edit = edit;
            vm.cancelEdit = cancelEdit;
            vm.save = save;
            vm.testFunctionForUnitTesting = testFunctionForUnitTesting;
            vm.getCandidates = getCandidates;
            // getCandidates();
        }

        ////////////////////////////Implementation//////////////////////////////////////

        // Invoke your service layer for this module
        function getCandidates() {

            return candidateService.getAllCandidates()
                .then(function (data) {

                    _(data).forEach(function (n) {
                        n.first_name = _.capitalize(n.first_name);
                    }).value();

                    vm.candidates = data;
                    return vm.candidates;
                });
        }

        function findCandidate(id) {
            for (var i in vm.candidates) {
                if (vm.candidates[i].candidate_id == id)
                    return i;
            }
        };

        function add() {
            vm.candidates.push(vm.newCandidate);
            vm.newCandidate = null;
        };

        function edit(candidate) {
            vm.currentEdit[candidate.candidate_id] = true;
            vm.itemToEdit = angular.copy(candidate);
            return vm.itemToEdit;
        };

        function cancelEdit(candidateId) {
            vm.currentEdit[candidateId] = false;
        };

        function save(candidate) {
            var c = vm.findCandidate(candidate.candidate_id);
            vm.candidates[c] = vm.itemToEdit;
            vm.currentEdit[candidate.candidate_id] = false;
            return vm.candidates;
        };

        function testFunctionForUnitTesting() {
            return "test";
        }

    };
})();
