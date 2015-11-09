/// <reference path="../../../../lib/angular/angular.js" />
/// <reference path="../../../../lib/angular/angular-mocks.js" />
/// <reference path="../js/onBoardingApp.candidate.controller.js" />

describe('onBoardingApp-candidate-controllers', function () {
    var candidateService, controller;

    beforeEach(function () {

        module('onBoardingApp.candidate.controllers');

        module(function ($provide) {
            $provide.value('candidateService', {
                getAllCandidates: function () {
                    return {
                        then: function () { return {}; },

                    }
                }
            });
        });

        module(function ($provide) {
            $provide.value('getCandidateService', {
                getAllCandidates: function () {
                    return {
                        then: function () { return {}; },

                    }
                }
            });
        });

        inject(function ($controller, _candidateService_, _getCandidateService_) {
            candidateService = _candidateService_;
            controller = $controller("CandidateController", {});
            getCandidateService = _getCandidateService_;
        });
    });

    it('should contain factory', function () {
        expect(candidateService).not.toEqual(null);
    });

    it('should return tempValueForUnitTest', function () {
        expect(controller.tempValueForUnitTest).toEqual("testing123");
    });

    it('should return testFunctionForUnitTesting function', function () {
        expect(controller.testFunctionForUnitTesting()).toEqual("test");
    });

    it('should add candidate record', function () {
        controller.candidates = [];
        controller.newCandidate =
        {
            'candidate_id': '1',
            'first_name': 'Scott',
            'middle_initial': 'AA',
            'last_name': 'Gurthie',
            'email': 'h@aa.com',
            'expected_salary': '15000'
        };        
       controller.add();
       expect(controller.candidates[0].email).toEqual('h@aa.com');
    });

    it("should cancel candidate's record to be updated", function () {
        controller.cancelEdit(2);
        expect(controller.currentEdit[2]).toBeFalsy();
    });

    it('should edit candidate record', function () {
        var candidate =
        {
            'candidate_id': '1',
            'first_name': 'Scott',
            'middle_initial': 'AA',
            'last_name': 'Gurthie',
            'email': 'h@aa.com',
            'expected_salary': '15000'
        };
        controller.edit(candidate);
        expect(controller.itemToEdit.first_name).toBe('Scott');
    });

    it("should find candidate by id", function () {

        controller.candidates = [
            {
                'candidate_id': '1',
                'first_name': 'Scott',
                'middle_initial': 'AA',
                'last_name': 'Gurthie',
                'email': 'h@aa.com',
                'expected_salary': '15000'
            }, {
                'candidate_id': '2',
                'first_name': 'Brett',
                'middle_initial': 'BB',
                'last_name': 'John',
                'email': 'h@bb.com',
                'expected_salary': '55000'
            }
        ];

        expect(controller.findCandidate(2)).toEqual('1');
    });

    it('should save candidate record after update', function () {
        var candidate =
        {
            'candidate_id': '1',
            'first_name': 'Scott111',
            'middle_initial': 'AA111',
            'last_name': 'Gurthie111',
            'email': 'h@aa111.com',
            'expected_salary': '15000111'
        };
        controller.edit(candidate);
        controller.save(candidate);
        expect(controller.itemToEdit.first_name).toBe('Scott111');
    });

});

