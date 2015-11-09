(function () {
    "use strict";
    angular
        .module("onBoardingApp")
        .run(runBlock);
    runBlock.$inject = ["$state"];
    function runBlock($state) {
        $state.go("adminHome");
    }
})();
//# sourceMappingURL=appRun.js.map