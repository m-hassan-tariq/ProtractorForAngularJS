/// <reference path="../../../../lib/angular/angular.js" />
/// <reference path="../../../../lib/angular/angular-mocks.js" />
/// <reference path="../../../../lib/angular-ui-router/angular-ui-router.js" />
/// <reference path="../onBoardingApp.candidate.js" />
/// <reference path="../js/onBoardingApp.candidate.controller.js" />
/// <reference path="../js/onBoardingApp.candidate.services.js" />

describe('onBoardingApp-candidate-route', function () {
    var state;

    beforeEach(function() {
        module('ui.router');
        module('onBoardingApp.candidate');

        inject(function($state) {
            state = $state.get('allCandidates');
        });
    });

    it('should contain state content', function () {
        expect(state).not.toEqual(null);
    });

    it('Matches a wild card URL', function () {
        expect(state.url).toEqual('/candidates');
    });

    it('Renders the html page', function () {
        expect(state.templateUrl).toEqual('/Scripts/app/modules/candidate/views/onBoardingApp.candidate.html');
    });

    it('Have associated controller', function () {
        expect(state.controller).toEqual('CandidateController');
    });
});