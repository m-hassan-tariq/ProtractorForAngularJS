var App;
(function (App) {
    var Candidate;
    (function (Candidate) {
        "use strict";
        CandidateService.$inject = ["webApi"];
        function CandidateService(webApi) {
            var factory = {
                getAllCandidates: getAllCandidates
            };
            return factory;
            function getAllCandidates() {
                return webApi.nonParameter('GET', '/Home/GetCandidateData');
            }
        }
        angular
            .module("onBoardingApp.candidate")
            .factory("candidateService", CandidateService);
    })(Candidate = App.Candidate || (App.Candidate = {}));
})(App || (App = {}));
//# sourceMappingURL=onBoardingApp.candidate.services.js.map