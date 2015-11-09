describe('menu check', function () {

    beforeEach(function () {
        browser.get('http://localhost:3472/#/');
        browser.waitForAngular();
    });

    it('Should route to the candidates page from menu', function () {
        element(by.linkText('Users')).click();
        expect(browser.getCurrentUrl()).toMatch('http://localhost:3472/#/candidates');
    });

    it('Should route to the home page from menu', function () {
        element(by.linkText('Home')).click();
        expect(browser.getCurrentUrl()).toMatch('http://localhost:3472/#/');
    });
});

