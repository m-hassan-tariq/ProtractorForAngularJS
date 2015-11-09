describe('Testing Homepage', function () {
    
    beforeEach(function () {
        browser.get('http://localhost:3472/#/');    
        browser.waitForAngular();
    });
    
    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('TAC Sample Angular Utility');
    });

    it('shaould have header of page', function () {
        var header = element(by.binding('type'));
        expect(header.getText()).toMatch('Admin Page');
    });
    
    it('Should update the url', function () {
        expect(browser.getCurrentUrl()).toMatch('http://localhost:3472/#/');
    });
    
    it('Should route to the candidates page', function () {
        element(by.linkText('candidates')).click();
        expect(browser.getCurrentUrl()).toMatch('http://localhost:3472/#/candidates');
    });

    it('Should search and return rows', function () {
        var name = element(by.model('search.first_name'));
        name.sendKeys('jack');
        browser.waitForAngular();
        var candidates = element.all(by.repeater('candidate in vm.candidates'));
        expect(candidates.count()).toBe(1);
    });

});