var App;
(function (App) {
    var Service;
    (function (Service) {
        "use strict";
        webApi.$inject = ["$http", "$templateCache", "$q"];
        function webApi($http, $templateCache, $q) {
            var factory = {
                withParameter: withParameter,
                nonParameter: nonParameter
            };
            return factory;
            function withParameter(methodType, webApiUrl, parameterObject) {
                var deferred = $q.defer();
                $http({
                    method: methodType,
                    url: webApiUrl,
                    data: parameterObject,
                    cache: $templateCache
                })
                    .success(deferred.resolve)
                    .error(deferred.resolve);
                return deferred.promise;
            }
            function nonParameter(methodType, webApiUrl) {
                var deferred = $q.defer();
                $http({
                    method: methodType,
                    url: webApiUrl,
                    cache: $templateCache
                })
                    .success(deferred.resolve)
                    .error(deferred.resolve);
                return deferred.promise;
            }
        }
        angular
            .module("onBoardingApp")
            .factory("webApi", webApi);
    })(Service = App.Service || (App.Service = {}));
})(App || (App = {}));
//# sourceMappingURL=webApiService.js.map