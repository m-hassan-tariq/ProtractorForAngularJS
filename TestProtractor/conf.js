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

