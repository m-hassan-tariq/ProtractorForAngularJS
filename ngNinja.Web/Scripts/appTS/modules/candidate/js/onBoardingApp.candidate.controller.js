var App;
(function (App) {
    var Candidate;
    (function (Candidate) {
        "use strict";
        var CandidateController = (function () {
            function CandidateController(candidateService) {
                var _this = this;
                this.candidateService = candidateService;
                this.findCandidate = function (id) {
                    for (var i in _this.candidates) {
                        if (_this.candidates[i].candidate_id == id)
                            return i;
                    }
                };
                this.edit = function (candidate) {
                    _this.currentEdit[candidate.candidate_id] = true;
                    _this.itemToEdit = angular.copy(candidate);
                    return _this.itemToEdit;
                };
                this.cancelEdit = function (candidateId) {
                    console.log(_this);
                    _this.currentEdit[candidateId] = false;
                };
                this.save = function (candidate) {
                    var c = _this.findCandidate(candidate.candidate_id);
                    _this.candidates[c] = _this.itemToEdit;
                    _this.currentEdit[candidate.candidate_id] = false;
                    return _this.candidates;
                };
                this.activate();
            }
            CandidateController.prototype.activate = function () {
                this.lazyLoadParams = [
                    '/Scripts/appTS/shared/directive/candidateGrid.js',
                    '/Scripts/appTS/shared/directive/maxLengthForNumbers.js',
                    '/Scripts/appTS/shared/directive/validemail.js'
                ];
                this.tempValueForUnitTest = "testing123";
                this.showAction = true;
                this.itemToEdit = {};
                this.currentEdit = {};
                this.getCandidates();
            };
            CandidateController.prototype.getCandidates = function () {
                var _this = this;
                return this.candidateService.getAllCandidates()
                    .then(function (response) {
                    _this.candidates = response;
                    return _this.candidates;
                });
            };
            CandidateController.prototype.add = function () {
                this.candidates.push(this.newCandidate);
                this.newCandidate = null;
            };
            ;
            CandidateController.prototype.testFunctionForUnitTesting = function () {
                return "test";
            };
            CandidateController.$inject = ["candidateService"];
            return CandidateController;
        })();
        angular
            .module("onBoardingApp.candidate")
            .controller("CandidateController", CandidateController);
    })(Candidate = App.Candidate || (App.Candidate = {}));
})(App || (App = {}));
//# sourceMappingURL=onBoardingApp.candidate.controller.js.map