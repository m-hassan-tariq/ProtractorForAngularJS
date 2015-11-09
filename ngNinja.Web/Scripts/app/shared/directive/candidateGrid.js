'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

﻿(function() {

    // Getters: When using a module, avoid using a variable and instead use chaining with the getter syntax.
    angular
        .module('onBoardingApp')
        //Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
        .directive('candidateDataGrid', onboardingCandidateGrid);

    function onboardingCandidateGrid() {
        var directive = {
            // Restrict to Elements and Attributes: When creating a directive that makes sense as a stand-alone element, allow restrict
            // E (custom element) and optionally restric. A (custom attribute). Generally, if it could be its own control, E is appropriate.
            // General guideline is allow EA but lean towards implementing as an element when it's stand-alone and as an attribute when it enhances its existing DOM element.
            // Note: EA is the default for Angular 1.3 +
            restrict: 'EA',
            templateUrl: 'scripts/app/shared/directive/template/candidateGrid.html',
            scope: {
                datasource: '=',
                showaction: '@',
                currentedit: '=',
                itemtoedit: '=',
                canceledit: '&',
                editcandidate: '&',
                savecandidate: '&',
                addcandidate: '&'
            },
            controller: onboardingCandidateGridController,
            // Directives and ControllerAs: Use controller as syntax with a directive to be consistent with using controller as with view and controller pairings.
            controllerAs: 'vm',
            // Use bindToController = true when using controller as syntax with a directive when you want to bind the outer scope to the directive's controller's scope.
            bindToController: true,
            transclude: true
        };

        return directive;
    }

    function onboardingCandidateGridController() {
        //controllerAs with vm: Use a capture variable for this when using the controllerAs syntax. Choose a consistent variable name such as vm, ViewModel
        var vm = this;

        // Controller Activation Promises: Resolve start-up logic for a controller in an init function.
        init();

        /////////////////////Implementation///////////////////////////////

        function init() {
            vm.itemToEdit = {};
            // Function Declarations to Hide Implementation Details: Use function declarations to hide implementation details. Keep your accessible members of
            // the factory up top. Point those to function declarations that appears later in the file
            vm.candidates = vm.datasource;
            vm.cancelEdit = cancelEdit;
            vm.currentEdit = vm.currentedit;
            vm.save = save;
            vm.edit = edit;
        }

        function cancelEdit(candidateId) {
            vm.canceledit()(candidateId);
        };

        function edit(candidate) {
            vm.itemToEdit =  vm.editcandidate()(candidate);
        };

        function save(candidate) {
            vm.candidates = vm.savecandidate()(candidate);
        };
    }

})();
