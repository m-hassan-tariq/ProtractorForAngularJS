var App;
(function (App) {
    var Home;
    (function (Home) {
        "use strict";
        var HomeController = (function () {
            function HomeController(homeService, getSecondaryCandidateService) {
                this.homeService = homeService;
                this.getSecondaryCandidateService = getSecondaryCandidateService;
                this.activate();
            }
            HomeController.prototype.activate = function () {
                this.lazyLoadParams = [
                    "/Scripts/appTS/shared/directive/candidateGrid.js"
                ];
                this.showAction = false;
                this.candidates = this.getSecondaryCandidateService;
            };
            ;
            HomeController.$inject = ["homeService", "getSecondaryCandidateService"];
            return HomeController;
        })();
        angular
            .module("onBoardingApp.home")
            .controller("HomeController", HomeController);
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=onBoardingApp.home.controllers.js.map