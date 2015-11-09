(function () {
    "use strict";
    angular
        .module("onBoardingApp")
        .config(config);
    config.$inject = ["$stateProvider"];
    function config($stateProvider) {
        $stateProvider
            .state("adminHome", {
            url: "/",
            controller: "HomeController",
            controllerAs: "vm",
            templateUrl: "/Scripts/appTS/modules/home/views/onBoardingApp.home.html",
            resolve: {
                getSecondaryCandidateService: getSecondaryCandidateService
            }
        })
            .state("allCandidates", {
            url: "/candidates",
            controller: "CandidateController",
            controllerAs: "vm",
            templateUrl: "/Scripts/appTS/modules/candidate/views/onBoardingApp.candidate.html",
            resolve: {
                allCandidates: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: "onBoardingApp.candidate",
                            files: ["/Scripts/appTS/modules/candidate/onBoardingApp.candidate.js"],
                            cache: false
                        },
                        {
                            name: "onBoardingApp.candidate.controllers",
                            files: ["/Scripts/appTS/modules/candidate/js/onBoardingApp.candidate.controller.js"],
                            cache: false
                        },
                        {
                            name: "onBoardingApp.candidate.services",
                            files: ["/Scripts/appTS/modules/candidate/js/onBoardingApp.candidate.services.js"],
                            cache: false
                        }
                    ]);
                }
            }
        });
        function getSecondaryCandidateService(homeService) {
            return homeService.getAllSecondaryCandidates();
        }
    }
})();
//# sourceMappingURL=appConfig.js.map