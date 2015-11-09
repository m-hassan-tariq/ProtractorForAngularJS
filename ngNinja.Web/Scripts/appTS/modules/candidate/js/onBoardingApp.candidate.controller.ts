module App.Candidate {
    "use strict";

    interface ICandidateController {
        candidates: App.Entity.ICandidate[];
        lazyLoadParams: string[];
        tempValueForUnitTest: string;
        showAction: boolean;
        currentEdit: App.Entity.ICandidate;
        itemToEdit: App.Entity.ICandidate;
        newCandidate: App.Entity.ICandidate;
        activate: () => void;
        getCandidates: () => ng.IPromise<App.Entity.ICandidate[]>;
        findCandidate: (id: number) => number;
        add: () => void;
        edit: (candidate: App.Entity.ICandidate) => App.Entity.ICandidate;
        cancelEdit: (candidateId: number) => void;
        save: (candidate: App.Entity.ICandidate) => App.Entity.ICandidate[];
        testFunctionForUnitTesting: () => string;

    }

    class CandidateController implements ICandidateController {

        candidates: App.Entity.ICandidate[];
        lazyLoadParams: string[];
        tempValueForUnitTest: string;
        showAction: boolean;
        currentEdit: App.Entity.ICandidate;
        itemToEdit: App.Entity.ICandidate;
        newCandidate: App.Entity.ICandidate;


        static $inject: string[] = ["candidateService"];

        constructor(private candidateService: ICandidateService) {
            this.activate();
        }

        activate() : void {
            this.lazyLoadParams = [
                '/Scripts/appTS/shared/directive/candidateGrid.js',
                '/Scripts/appTS/shared/directive/maxLengthForNumbers.js',
                '/Scripts/appTS/shared/directive/validemail.js'
            ];
            this.tempValueForUnitTest = "testing123";
            this.showAction = true;
            this.itemToEdit = <App.Entity.ICandidate>{};
            this.currentEdit = <App.Entity.ICandidate> {};
            this.getCandidates();
            
        }

        getCandidates(): ng.IPromise<App.Entity.ICandidate[]> {
            return this.candidateService.getAllCandidates()
                .then((response: ng.IHttpPromiseCallbackArg<App.Entity.ICandidate[]>): App.Entity.ICandidate[] => {
                    this.candidates = <App.Entity.ICandidate[]>response
                    return this.candidates;
                });
        }

        findCandidate = (id: number): number => {
            for (var i in this.candidates) {
                if (this.candidates[i].candidate_id == id)
                    return i;
            }
        };

        add(): void {
            this.candidates.push(this.newCandidate);
            this.newCandidate = null;
        };

        edit = (candidate: App.Entity.ICandidate): App.Entity.ICandidate => {
            this.currentEdit[candidate.candidate_id] = true;
            this.itemToEdit = angular.copy(candidate);
            return this.itemToEdit;
        };

        cancelEdit = (candidateId: number): void => {
            console.log(this)
            this.currentEdit[candidateId] = false;
        };

        save = (candidate: App.Entity.ICandidate): App.Entity.ICandidate[] => {
            var c = this.findCandidate(candidate.candidate_id);
            this.candidates[c] = this.itemToEdit;
            this.currentEdit[candidate.candidate_id] = false;
            return this.candidates;
        };

        testFunctionForUnitTesting(): string {
            return "test";
        }
    }

    angular
        .module("onBoardingApp.candidate")
        .controller("CandidateController", CandidateController);
}