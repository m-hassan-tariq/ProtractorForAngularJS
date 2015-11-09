var App;
(function (App) {
    var Directive;
    (function (Directive) {
        "use strict";
        validmail.$inject = ["$window"];
        function validmail($window) {
            return {
                restrict: 'A',
                scope: {},
                controller: validEmailController,
                controllerAs: 'vm',
                link: link,
                bindToController: true,
            };
            function link(scope, element, attrs) {
                element.bind('blur', function () {
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
    })(Directive = App.Directive || (App.Directive = {}));
})(App || (App = {}));
//# sourceMappingURL=validemail.js.map