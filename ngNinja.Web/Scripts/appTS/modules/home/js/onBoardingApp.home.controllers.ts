module App.Home {
    "use strict";

    interface IHomeController {
        lazyLoadParams: string[];
        showAction: boolean;
        candidates: App.Entity.ICandidate[];
        activate: () => void;
    }

    class HomeController implements IHomeController {

        lazyLoadParams: string[];
        showAction: boolean;
        candidates: App.Entity.ICandidate[];

        static $inject: string[] = ["homeService", "getSecondaryCandidateService"];

        constructor(private homeService: App.Home.IHomeService, private getSecondaryCandidateService: App.Entity.ICandidate[]) {
            this.activate();
        }

        activate(): void {

            this.lazyLoadParams = [
                "/Scripts/appTS/shared/directive/candidateGrid.js"
            ];
            this.showAction = false;
            this.candidates = this.getSecondaryCandidateService;

        };
    }

    angular
        .module("onBoardingApp.home")
        .controller("HomeController", HomeController);
}