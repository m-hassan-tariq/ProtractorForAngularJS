var App;
(function (App) {
    var Directive;
    (function (Directive) {
        "use strict";
        var MaxLengthForNumbersController = (function () {
            function MaxLengthForNumbersController() {
            }
            MaxLengthForNumbersController.prototype.activate = function () {
                console.log('Directive Controller');
            };
            MaxLengthForNumbersController.$inject = ['$window'];
            return MaxLengthForNumbersController;
        })();
        var maxLengthForNumbers = (function () {
            function maxLengthForNumbers() {
                this.restrict = 'A';
                this.controller = MaxLengthForNumbersController;
            }
            maxLengthForNumbers.instance = function () {
                return new maxLengthForNumbers;
            };
            maxLengthForNumbers.prototype.link = function (scope, element, attrs, event) {
                element.bind('keyup', function (event) {
                    if (event.keyCode == 46 || event.keyCode == 8) {
                    }
                    else {
                        if (event.keyCode < 48 || event.keyCode > 57) {
                            element.css('background-color', 'red');
                            alert('invalid input');
                        }
                    }
                    if (!isNaN(element.val()))
                        element.css('background-color', '');
                });
            };
            ;
            return maxLengthForNumbers;
        })();
        angular
            .module("onBoardingApp")
            .directive("maxLengthForNumbers", maxLengthForNumbers.instance);
    })(Directive = App.Directive || (App.Directive = {}));
})(App || (App = {}));
//# sourceMappingURL=maxLengthForNumbers.js.map