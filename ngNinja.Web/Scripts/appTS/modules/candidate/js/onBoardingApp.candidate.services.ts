module App.Candidate {
    "use strict";

    export interface ICandidateService {
        getAllCandidates: () => ng.IPromise<App.Entity.ICandidate[]>;
    }

    CandidateService.$inject = ["webApi"];

    function CandidateService(webApi: App.Service.IWebApi): ICandidateService {

        var factory: ICandidateService = {
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
}