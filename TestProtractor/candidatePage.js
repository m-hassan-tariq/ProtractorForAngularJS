describe('Testing Candidate Page', function () {
    
    beforeEach(function () {
        browser.get('http://localhost:3472/#/candidates');
        browser.waitForAngular();
    });
    
    it('Should add candidates and return rows', function () {
        element(by.model('vm.newCandidate.first_name')).sendKeys('aaq');
        element(by.model('vm.newCandidate.middle_initial')).sendKeys('aa');
        element(by.model('vm.newCandidate.last_name')).sendKeys('aac');
        element(by.model('vm.newCandidate.email')).sendKeys('haa@aa.com');
        element(by.model('vm.newCandidate.expected_salary')).sendKeys('234');
        
        element(by.css('.btn-primary')).click();
        
        browser.waitForAngular();
        var candidates = element.all(by.repeater('candidate in vm.candidates'));
        expect(candidates.count()).toBe(11);
    });
    
    it('Should invalidate email', function () {
        element(by.model('vm.newCandidate.email')).sendKeys('haa@com');
        element(by.model('vm.newCandidate.expected_salary')).sendKeys('111');

        browser.waitForAngular();

        element(by.model('vm.newCandidate.email')).getCssValue('background-color').then(function (color) {
            expect(color).toEqual('rgba(255, 255, 0, 1)');
        });
    });
    
    it('Should add edit candidates', function () {
        
        element.all(by.repeater('candidate in vm.candidates')).then(function (candidates) {
            candidates[0].element(by.buttonText('Edit')).click();
            candidates[0].element(by.model('vm.itemToEdit.first_name')).clear().then(function () {
                candidates[0].element(by.model('vm.itemToEdit.first_name')).sendKeys('BillBBP');
            });
            candidates[0].element(by.model('vm.itemToEdit.middle_initial')).clear().then(function () {
                candidates[0].element(by.model('vm.itemToEdit.middle_initial')).sendKeys('BBP');
            });
            candidates[0].element(by.model('vm.itemToEdit.last_name')).clear().then(function () {
                candidates[0].element(by.model('vm.itemToEdit.last_name')).sendKeys('GatesBBP');
            });
            candidates[0].element(by.model('vm.itemToEdit.email')).clear().then(function () {
                candidates[0].element(by.model('vm.itemToEdit.email')).sendKeys('BbP@aa.com');
            });
            candidates[0].element(by.model('vm.itemToEdit.expected_salary')).clear().then(function () {
                candidates[0].element(by.model('vm.itemToEdit.expected_salary')).sendKeys('800');
            });
            candidates[0].element(by.buttonText('Save')).click();
        });
        
        browser.waitForAngular();
        element.all(by.repeater('candidate in vm.candidates')).then(function (candidates) {
            var fName = candidates[0].element(by.binding('candidate.first_name'));
            expect(fName.getText()).toEqual('BillBBP');
        });
    });

});