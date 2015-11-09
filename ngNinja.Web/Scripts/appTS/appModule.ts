((): void => {
    "use strict";

    angular
        .module("onBoardingApp", [
            "onBoardingApp.Core",
            "onBoardingApp.Module"
        ]);

    angular
        .module("onBoardingApp.Core", [
            "ui.router",
            "oc.lazyLoad",
            "breeze.angular"
        ]);

    angular
        .module("onBoardingApp.Module", [
            "onBoardingApp.home",
        // "onBoardingApp.candidate",
            "onBoardingApp.layout"
        ]);
})(); 