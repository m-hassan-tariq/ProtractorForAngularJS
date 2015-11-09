module App.Home {
    "use strict";

    export interface IHomeService {
        getAllSecondaryCandidates: () => ng.IPromise<App.Entity.ICandidate[]>;
    }

    HomeService.$inject = ["webApi"];

    function HomeService(webApi: App.Service.IWebApi): IHomeService {

        var factory: IHomeService = {
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
}