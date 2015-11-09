
/// <reference path="../../../lib/angular/angular.js" />
/// <reference path="../../../lib/angular/angular-mocks.js" />
/// <reference path="../../../lib/angular-ui-router/angular-ui-router.js" />
/// <reference path="../../appModule.js" />
/// <reference path="../services/webApiService.js" />
/// <reference path="../../modules/home/onBoardingApp.home.js" />
/// <reference path="../../modules/home/js/onBoardingApp.home.controllers.js" />
/// <reference path="../../modules/home/js/onBoardingApp.home.services.js" />
/// <reference path="../../modules/candidate/onBoardingApp.candidate.js" />
/// <reference path="../../modules/candidate/js/onBoardingApp.candidate.controller.js" />
/// <reference path="../../modules/candidate/js/onBoardingApp.candidate.services.js" />
/// <reference path="../../modules/layout/onBoardingApp.layout.js" />
/// <reference path="../../modules/layout/js/controllers.js" />


describe('onBoardingApp-Shared-HTTP-Service', function () {
    var webApi, httpBackend;

    beforeEach(function () {
        module('onBoardingApp');

        inject(function ($httpBackend, _webApi_) {
            webApi = _webApi_;
            httpBackend = $httpBackend;
        });
    });

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should contain service', function () {
        expect(webApi).not.toEqual(null);
    });

    it('should send the msg to With-Paramater API and return the response.', function () {
        var returnData = { response: true };
        httpBackend.expectGET('somthing.json').respond(returnData);
        var returnedPromise = webApi.withParameter('GET', 'somthing.json', 'msg=test');
        var result;
        returnedPromise.then(function (response) {
            result = response;
        });

        httpBackend.flush();
        expect(result).toEqual(returnData);
    });

    it('should send the msg to non-Paramater API and return the response.', function () {
        var returnData = { response: true };
        httpBackend.expectGET('somthing.json').respond(returnData);
        var returnedPromise = webApi.nonParameter('GET', 'somthing.json');
        var result;
        returnedPromise.then(function (response) {
            result = response;
        });

        httpBackend.flush();
        expect(result).toEqual(returnData);
    });
});
