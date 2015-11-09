var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function () {
    var args = arguments;
    
    origFn.call(browser.driver.controlFlow(), function () {
        //increase or reduce time value, its in millisecond
        return protractor.promise.delayed(100);
    });
    
    return origFn.apply(browser.driver.controlFlow(), args);
};