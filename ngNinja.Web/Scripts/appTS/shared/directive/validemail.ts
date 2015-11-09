module App.Directive {
    "use strict";

    interface Ivalidmail extends ng.IDirective {
    }

    interface IvalidmailScope extends ng.IScope {
    }

    interface IvalidmailAttributes extends ng.IAttributes {
    }

    validmail.$inject = ["$window"];

    function validmail($window: ng.IWindowService): Ivalidmail {
        return {
            restrict: 'A',
            scope: {},
            controller: validEmailController,
            controllerAs: 'vm',
            link: link,
            bindToController: true,
        }

        function link(scope: IvalidmailScope, element: ng.IAugmentedJQuery, attrs: IvalidmailAttributes) {
            element.bind('blur', (): void => {
                var regex = /\S+@\S+\.\S+/;
                element.css('background-color', !regex.test(element.val()) ? 'yellow' : '');
            });
        }

        function validEmailController() {
            var vm = this;

        }
    }

    angular
        .module("onBoardingApp")
        .directive("validEmail", validmail);
}