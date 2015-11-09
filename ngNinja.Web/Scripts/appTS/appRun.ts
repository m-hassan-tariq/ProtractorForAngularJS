((): void => {
    "use strict";

    angular
        .module("onBoardingApp")
        .run(runBlock);

    runBlock.$inject = ["$state"];

    function runBlock($state: ui.IStateService): void {
        $state.go("adminHome");
    }

})(); 