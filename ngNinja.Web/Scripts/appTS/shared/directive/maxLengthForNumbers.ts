module App.Directive {
    "use strict";

    interface ImaxLengthForNumbersScope extends ng.IScope {
    }

    interface ImaxLengthForNumbersAttributes extends ng.IAttributes {
    }

    interface IMaxLengthForNumbersController {
        activate(): void;
    }

    class MaxLengthForNumbersController implements IMaxLengthForNumbersController {

        static $inject = ['$window'];

        constructor() {
        }

        activate(): void {
            console.log('Directive Controller')
        }
    }

    class maxLengthForNumbers implements ng.IDirective {
        static instance(): ng.IDirective {
            return new maxLengthForNumbers;
        }

        restrict = 'A';
        scope: {};
        controller = MaxLengthForNumbersController;

        link(scope: ImaxLengthForNumbersScope, element: ng.IAugmentedJQuery, attrs: ImaxLengthForNumbersAttributes, event: KeyboardEvent) {

            element.bind('keyup', (event): void => {

                if (event.keyCode == 46 || event.keyCode == 8) {

                } else {
                    if (event.keyCode < 48 || event.keyCode > 57) {
                        element.css('background-color', 'red');
                        alert('invalid input');
                    }
                }
                if (!isNaN(element.val()))
                    element.css('background-color', '');
            });

        };

    }

    angular
        .module("onBoardingApp")
        .directive("maxLengthForNumbers", maxLengthForNumbers.instance);
}