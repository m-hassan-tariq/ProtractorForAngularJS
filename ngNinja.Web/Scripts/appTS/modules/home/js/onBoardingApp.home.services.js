var App;
(function (App) {
    var Home;
    (function (Home) {
        "use strict";
        HomeService.$inject = ["webApi"];
        function HomeService(webApi) {
            var factory = {
                getAllSecondaryCandidates: getAllSecondaryCandidates
            };
            return factory;
            function getAllSecondaryCandidates() {
                return webApi.nonParameter('GET', '/Home/GetSecondaryCandidateData');
            }
        }
        angular
            .module("onBoardingApp.home")
            .factory("homeService", HomeService);
    })(Home = App.Home || (App.Home = {}));
})(App || (App = {}));
//# sourceMappingURL=onBoardingApp.home.services.js.map