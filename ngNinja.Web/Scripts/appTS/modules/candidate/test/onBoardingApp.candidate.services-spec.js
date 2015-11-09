/// <reference path="../../../../lib/angular/angular.js" />
/// <reference path="../../../../lib/angular/angular-mocks.js" />
/// <reference path="../js/onBoardingApp.candidate.services.js" />

describe('onBoardingApp-candidate-services', function () {
    var candidateService, webApi;

    beforeEach(function () {

        module(function ($provide) {
            $provide.service('webApi', function () {
                this.nonParameter = jasmine.createSpy('nonParameter');
            });
        });
        module('onBoardingApp.candidate.services');

        inject(function(_webApi_, _candidateService_) {
            webApi = _webApi_;
            candidateService = _candidateService_;
        });
    });

    it('should contain shared service', function () {
        expect(webApi).not.toEqual(null);
    });

    it('should contain factory', function () {
        expect(candidateService).toBeDefined();
    });

    it('should not invoke method with irrelevant parameters', function () {
        expect(webApi.nonParameter).not.toHaveBeenCalledWith('GET', '/Home/GetCandidateData1');
    });
});
