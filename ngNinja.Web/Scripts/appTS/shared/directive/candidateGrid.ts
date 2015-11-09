module App.Directive {
    "use strict";

    interface IcandidateGridScope extends ng.IScope {
        vm: any;
        datasource: App.Entity.ICandidate[];
        showaction: boolean;
        itemtoedit: any;
        currentedit: any;

    }

    interface IcandidateGridAttributes extends ng.IAttributes {
    }

    interface ICandidateGridController {
        candidates: App.Entity.ICandidate[];
        itemToEdit: App.Entity.ICandidate;
        currentEdit: App.Entity.ICandidate;
        activate(): void;
        cancelEdit(candidateId: number): void;
        edit(candidate: App.Entity.ICandidate): void;
        save(candidate: any): void;
    }

    class CandidateGridController implements ICandidateGridController {

        candidates = [];
        itemToEdit = <App.Entity.ICandidate>{};
        currentEdit = <App.Entity.ICandidate>{};


        static $inject = ['$scope'];

        constructor(public $scope: IcandidateGridScope) {
            this.activate();
        }

        activate(): void {
            this.candidates = this.$scope.vm.datasource;
            this.currentEdit = this.$scope.vm.currentedit;
        }

        cancelEdit(candidateId: number): void {
            this.$scope.vm.canceledit()(candidateId);
        };

        edit(candidate: App.Entity.ICandidate): void {
            this.itemToEdit = this.$scope.vm.editcandidate()(candidate);
        };

        save(candidate: App.Entity.ICandidate): void {
            this.candidates = this.$scope.vm.savecandidate()(candidate);
        };
    }

     class candidateGrid implements ng.IDirective {
        static instance(): ng.IDirective {
            return new candidateGrid;
        }

        restrict = 'EA';
        templateUrl = 'scripts/app/shared/directive/template/candidateGrid.html';
        scope = {
            datasource: '=',
            currentedit: '=',
            itemtoedit: '=',
            showaction: '@',
            canceledit: '&',
            editcandidate: '&',
            savecandidate: '&',  
            addcandidate: '&'
        };
        controller = CandidateGridController;
        controllerAs = 'vm';
        bindToController = true;
        transclude = true;

        link(scope: IcandidateGridScope, element: ng.IAugmentedJQuery, attrs: IcandidateGridAttributes) {

        };

    }

    angular
        .module("onBoardingApp")
        .directive("candidateDataGrid", candidateGrid.instance);
}