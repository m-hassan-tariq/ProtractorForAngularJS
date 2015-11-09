'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).
﻿
(function () {

    // Getters: When using a module, avoid using a variable and instead use chaining with the getter syntax.
    angular
      .module('onBoardingApp')
      //Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
      .directive('maxLengthForNumbers', onboardingCandidateGrid);

    function onboardingCandidateGrid() {
        var directive = {
            // Restrict to Elements and Attributes: When creating a directive that makes sense as a stand-alone element, allow restrict E (custom element)
            // and optionally restrict A (custom attribute). Generally, if it could be its own control, E is appropriate. General guideline is allow EA but
            // lean towards implementing as an element when it's stand-alone and as an attribute when it enhances its existing DOM element.
            // Note: EA is the default for Angular 1.3 +
            restrict: 'A',
            scope: {},
            controller: maxLengthForNumbersController,
            // Directives and ControllerAs: Use controller as syntax with a directive to be consistent with using controller as with view and controller pairings.
            controllerAs: 'vm',
            link: link,
            // Use bindToController = true when using controller as syntax with a directive when you want to bind the outer scope to the directive's controller's scope.
            bindToController: true,
        };

        return directive;
    }

    function maxLengthForNumbersController() {
        //controllerAs with vm: Use a capture variable for this when using the controllerAs syntax. Choose a consistent variable name such as vm, ViewModel
        var vm = this;

    }

    function link(scope, element, attrs) {
        element.bind('keyup', function () {
            if (event.keyCode == 46 || event.keyCode == 8) {

            } else {
                if (event.keyCode < 48 || event.keyCode > 57) {
                    element.css('background-color', 'red');
                    alert('invalid input');
                }
            }
            if(!isNaN(element.val()))
                element.css('background-color', '');
        });

    };
})();
