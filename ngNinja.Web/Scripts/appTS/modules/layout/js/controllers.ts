module onBoardingApp.layout {
    "use strict";

    interface ILayoutControllerScope extends ng.IScope {
        title: string;
    }

    interface ILayoutController {
        activate: () => void;
    }

    class LayoutController implements ILayoutController {

        static $inject: string[] = ["$scope"];

        constructor(private $scope: ILayoutControllerScope) {
            $scope.title = "test1";
            this.activate();
        }

        activate() {
            // to do
        }

    }

    angular
        .module("onBoardingApp.layout")
        .controller("LayoutController", LayoutController);
}