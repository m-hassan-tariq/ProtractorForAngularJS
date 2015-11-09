var onBoardingApp;
(function (onBoardingApp) {
    var layout;
    (function (layout) {
        "use strict";
        var LayoutController = (function () {
            function LayoutController($scope) {
                this.$scope = $scope;
                $scope.title = "test1";
                this.activate();
            }
            LayoutController.prototype.activate = function () {
                // to do
            };
            LayoutController.$inject = ["$scope"];
            return LayoutController;
        })();
        angular
            .module("onBoardingApp.layout")
            .controller("LayoutController", LayoutController);
    })(layout = onBoardingApp.layout || (onBoardingApp.layout = {}));
})(onBoardingApp || (onBoardingApp = {}));
//# sourceMappingURL=controllers.js.map