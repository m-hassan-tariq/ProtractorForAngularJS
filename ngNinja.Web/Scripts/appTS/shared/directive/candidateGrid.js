var App;
(function (App) {
    var Directive;
    (function (Directive) {
        "use strict";
        var CandidateGridController = (function () {
            function CandidateGridController($scope) {
                this.$scope = $scope;
                this.candidates = [];
                this.itemToEdit = {};
                this.currentEdit = {};
                this.activate();
            }
            CandidateGridController.prototype.activate = function () {
                this.candidates = this.$scope.vm.datasource;
                this.currentEdit = this.$scope.vm.currentedit;
            };
            CandidateGridController.prototype.cancelEdit = function (candidateId) {
                this.$scope.vm.canceledit()(candidateId);
            };
            ;
            CandidateGridController.prototype.edit = function (candidate) {
                this.itemToEdit = this.$scope.vm.editcandidate()(candidate);
            };
            ;
            CandidateGridController.prototype.save = function (candidate) {
                this.candidates = this.$scope.vm.savecandidate()(candidate);
            };
            ;
            CandidateGridController.$inject = ['$scope'];
            return CandidateGridController;
        })();
        var candidateGrid = (function () {
            function candidateGrid() {
                this.restrict = 'EA';
                this.templateUrl = 'scripts/app/shared/directive/template/candidateGrid.html';
                this.scope = {
                    datasource: '=',
                    currentedit: '=',
                    itemtoedit: '=',
                    showaction: '@',
                    canceledit: '&',
                    editcandidate: '&',
                    savecandidate: '&',
                    addcandidate: '&'
                };
                this.controller = CandidateGridController;
                this.controllerAs = 'vm';
                this.bindToController = true;
                this.transclude = true;
            }
            candidateGrid.instance = function () {
                return new candidateGrid;
            };
            candidateGrid.prototype.link = function (scope, element, attrs) {
            };
            ;
            return candidateGrid;
        })();
        angular
            .module("onBoardingApp")
            .directive("candidateDataGrid", candidateGrid.instance);
    })(Directive = App.Directive || (App.Directive = {}));
})(App || (App = {}));
//# sourceMappingURL=candidateGrid.js.map