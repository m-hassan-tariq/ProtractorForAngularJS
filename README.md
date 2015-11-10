# ProtractorForAngularJS
Using Protractor for E2E testing of AngularJS application in Visual Studio 

Protractor is an end-to-end test framework for AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.Integrating Protractor for AngualrJS application in Visual Studio needs some configuration.

Follow step 1 to step 8 to integrate protractor in your visual studio project from my previous post:

Installation and Setup Protractor in Visual Studio


https://hassantariqblog.wordpress.com/2015/11/06/installing-and-using-protractor-for-angularjs-application-in-visual-studio/

###Step 1: Setup Node.js Console Application

    Add New Project in main solution file

    ![2015-11-06_17-11-22](https://cloud.githubusercontent.com/assets/10474169/11066429/c5f8c3e0-878d-11e5-9044-ed3959195fc8.png)

    Search for Nodejs console application template and name it
    
    ![2015-11-06_17-13-45](https://cloud.githubusercontent.com/assets/10474169/11066444/dac77938-878d-11e5-8e49-26c575188b63.png)

###Step 2: Add conf.js file for protractor configuration

    For sample just add below code in file named as ‘conf.js’

  // An example configuration file. 
  exports.config = {
      // The address of a running selenium server. 
      seleniumAddress: 'http://localhost:4444/wd/hub', 
      
      // Capabilities to be passed to the webdriver instance. 
   
      //capabilities: {
      //    'browserName': 'chrome'
      //}, 
      
      multiCapabilities: [{
              'browserName': 'chrome'
          }, {
              'browserName': 'firefox'
          }],
      
      // Spec patterns are relative to the current working directly when 
      // protractor is called. 
      specs: ['customConfig.js', 'menu.js', 'homePage.js' , 'candidatePage.js'], 
      
      // Options to be passed to Jasmine-node. 
      jasmineNodeOpts: {
          showColors: true, 
          defaultTimeoutInterval: 30000
      }
  };

    ![2015-11-09_17-36-40](https://cloud.githubusercontent.com/assets/10474169/11066511/25e92808-878e-11e5-9672-ef76f8bfa5c1.png)

Please Note:

using multiCapabilities will run all the tests in each of the browsers
https://hassantariqblog.wordpress.com/2015/11/09/execute-protractor-test-in-parallel-on-different-browser/

###Step 3: Build Project and get URL of project

    Press CTRL + F5 and note down localhost URL for your application.
    For Example: http://localhost:3472/#/
    
    ![2015-11-06_17-47-54](https://cloud.githubusercontent.com/assets/10474169/11067186/01e8bd9e-8791-11e5-9275-72921bb79a2b.png)

###Step 4: Syntax Understanding

Protractor API: http://angular.github.io/protractor/#/api

Note: Most commands return promises, so you only resolve their values through using jasmine expect API or using .then(function()) structure.
Protractor Cheatsheet

    ####Control browser

    browser.get('yoururl// Load address, can also use '#yourpage'
    browser.navigate().back();
    browser.navigate().forward();
    browser.sleep(10000); // if your test is outrunning the browser
    browser.pause();
    browser.debugger();
    browser.waitForAngular(); // if your test is outrunning the browser
    browser.getLocationAbsUrl() // get the current address

    ####Check Visibility

    element(by.id('create')).isPresent();
    element(by.id('create')).isEnabled();
    element(by.id('create')).isDisplayed();

    ####Find an element by id, model, binding

    element(by.id('user_name');
    element(by.css('#myItem');
    element(by.model('person.name');
    element(by.binding('person.concatName'));
    element(by.textarea('person.extraDetails'));
    element(by.input('username'));
    element(by.input('username')).clear();
    element(by.buttonText('Save'));
    element(by.partialButtonText('Save'));
    element(by.linkText('Save'));
    element(by.partialLinkText('Save'));
    element(by.css('[ng-click="cancel()"]'));
    
    var dog = element(by.cssContainingText('.pet', 'Dog'));
    var allOptions = element.all(by.options('c c in colors'));

    ####Find collection of elements by css, repeater, xpath..

    var list = element.all(by.css('.items'));
    var list2 = element.all(by.repeater('personhome.results'));
    var list3 = element.all(by.xpath('//div');
    expect(list.count()).toBe(3);
    
    element(by.id('user_name')).sendKeys('user1');
    sendKeys(protractor.Key.ENTER);
    sendKeys(protractor.Key.TAB);
    element(by.id('user_name')).clear();
    element(by.id('item1')).getLocation().then(function(location) {
        var x = location.x;
        var y = location.y;
    });
    element(by.id('item1')).getSize().then(function(size) {
     var width = size.width;
     var height = size.height;
    });

    For more detail, check out this cheat sheet
    https://github.com/sillsdev/web-languageforge/blob/master/test/app/chris's%20protractor%20api%20cheatsheet.md
    
    ####Protractor Concepts

    describe("A suite is just a function", function() {
      var a;
      it("and so is a spec", function() {
        a = true;
        expect(a).toBe(true);
      });
    });

    - describe Your TestsA test suite begins with a call to the global Protractor function describe with two parameters: a string and a function. The string is a name or title for a spec suite – usually what is being tested. The function is a block of code that implements the suite.
      SpecsSpecs are defined by calling the global Protractor function it, which, like describe takes a string and a function. The string is the title of the spec and the function is the spec, or test. A spec contains one or more expectations that test the state of the code. An expectation in Protractor is an assertion that is either true or false. A spec with all true expectations is a passing spec. A spec with one or more false expectations is a failing spec.

    - It’s Just FunctionsSince describe and it blocks are functions, they can contain any executable code necessary to implement the test. JavaScript scoping rules apply, so variables declared in a describe are available to any it block inside the suite.

    - ExpectationsExpectations are built with the function expect which takes a value, called the actual. It is chained with a Matcher function, which takes the expected value.

    - MatchersEach matcher implements a boolean comparison between the actual value and the expected value. It is responsible for reporting to Protractor if the expectation is true or false. Protractor will then pass or fail the spec.Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.

    - Setup and TeardownTo help a test suite DRY up any duplicated setup and teardown code, Protractor provides the global beforeEach and afterEach functions. As the name implies, the beforeEach function is called once before each spec in the describe in which it is called, and the afterEach function is called once after each spec. Here is the same set of specs written a little differently. The variable under test is defined at the top-level scope — the describe block — and initialization code is moved into a beforeEach function. The afterEach function resets the variable before continuing.

    - waitForAngular()
      Instruct webdriver to wait until Angular has finished rendering and has no outstanding $http or $timeout calls before continuing. Note that Protractor automatically applies this command before every WebDriver action.

    - sendKeys()
      Schedules a command to type/update a value on the DOM element represented by this instance. I know its bit hard to understand, here is the simple one: “Send one or more keystrokes to the active window as if they were typed at the keyboard”. For example in order to enter value of any text input, we use sendKeys() function.

###Step 5a: Add first test spec file for e2e testing

    For sample just add below code in file named as ‘menu.js’

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

    ![2015-11-09_17-39-38](https://cloud.githubusercontent.com/assets/10474169/11067306/8a6403fe-8791-11e5-8714-6842e742f205.png)

    Tests in this file will click on menu item and confirm their updated URL matches with test case expected values i.e. Home and Users

    ![2015-11-09_17-43-09](https://cloud.githubusercontent.com/assets/10474169/11067341/a857ead8-8791-11e5-8c17-0f74709d54e6.png)

    Copy URL from step 3 to browser.get statement in menu.js file
    Name of file should be similar to what you have defined in conf.js under specs node

      // An example configuration file. 
      exports.config = {
          // Spec patterns are relative to the current working directly when 
          // protractor is called. 
          specs: ['menu.js'], 
      };

###Step 5b: Add Second test spec file for e2e testing

    For sample just add below code in file named as ‘homePage.js’

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

    ![2015-11-09_18-22-49](https://cloud.githubusercontent.com/assets/10474169/11067340/a857d5ac-8791-11e5-8829-c832bd0f6400.png)

    Tests in this file will check page title, page header, url, click on href link and count of search result as highlight in image below

    ![2015-11-09_18-25-19](https://cloud.githubusercontent.com/assets/10474169/11067339/a84ebdaa-8791-11e5-97d8-e49830e17c8f.png)

    Name of file should be similar to what you have defined in conf.js under specs node

    // An example configuration file. 
    exports.config = {
        // Spec patterns are relative to the current working directly when 
        // protractor is called. 
        specs: ['menu.js', 'homePage.js'], 
    };

###Step 5c: Add Second test spec file for e2e testing

    For sample just add below code in file named as ‘candidatePage.js’

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

    ![2015-11-09_18-31-45](https://cloud.githubusercontent.com/assets/10474169/11067337/a84d86e2-8791-11e5-83f3-71651fdbde96.png)

    Tests in this file will add candidate record in grid as highlight in image below

    ![2015-11-09_18-37-33](https://cloud.githubusercontent.com/assets/10474169/11067338/a84e5522-8791-11e5-9245-5fe2f24ba5bc.png)

    Tests in this file will check invalidate email value during adding record as highlight in image below

    ![2015-11-09_18-39-57](https://cloud.githubusercontent.com/assets/10474169/11067335/a84b4c2e-8791-11e5-95e4-badb9948ed90.png)

    Tests in this file will edit first candidate record in grid as highlight in image below

    ![2015-11-09_18-41-13](https://cloud.githubusercontent.com/assets/10474169/11067336/a84cb280-8791-11e5-9798-e245ca63bf8e.png)

    Name of file should be similar to what you have defined in conf.js under specs node

    // An example configuration file. 
    exports.config = {
        // Spec patterns are relative to the current working directly when 
        // protractor is called. 
        specs: ['menu.js', 'homePage.js', 'candidatePage.js'], 
    };

###Step 6(optional): Reduce Speed of Protractor Tests

  You may witness quick execution of these tests, browser will be quickly invoked and these test will be run in flash of seconds. In order to reduce speed follow below steps:

    For sample just add below code in file named as ‘customConfig.js’

    var origFn = browser.driver.controlFlow().execute;
    
    browser.driver.controlFlow().execute = function () {
        var args = arguments;
        
        origFn.call(browser.driver.controlFlow(), function () {
            //increase or reduce time value, its in millisecond
            return protractor.promise.delayed(100);
        });
        
        return origFn.apply(browser.driver.controlFlow(), args);
    };

    ![2015-11-09_12-37-48](https://cloud.githubusercontent.com/assets/10474169/11067449/33389468-8792-11e5-9639-1aaf3404093f.png)

    Name of file should be similar to what you have defined in conf.js under specs node

    // An example configuration file. 
    exports.config = {
        // Spec patterns are relative to the current working directly when 
        // protractor is called. 
        specs: ['customConfig.js', 'menu.js', 'homePage.js', 'candidatePage.js'] 
    };

###Step 7: Run Test Specs

    Right click on project and choose Open Command prompt here (we can do this in CMD too, but for a moment lets stick to VS environment)
    run protractor for example_spec file, execute the below command

    protractor conf.js

    ![2015-11-06_17-59-10](https://cloud.githubusercontent.com/assets/10474169/11067495/68aa3b42-8792-11e5-90c1-ce00a75a54ca.png)

    Chrome and Firefox Browser behind CMD is opened by selenium web driver and execute our test and output is generated in CMD as below:

    ![2015-11-09_18-51-34](https://cloud.githubusercontent.com/assets/10474169/11067334/a84af31e-8791-11e5-88d3-1446e3232cf1.png)

    Video of protractor executing these tests is below:
    
    https://www.youtube.com/watch?v=rX9eeg4mNBo

    Happy Coding.
