module App.Service {
    "use strict";

    export interface IWebApi {
        withParameter: (methodType: string, webApiUrl: string, parameterObject: any) => any;
        nonParameter: (methodType: string, webApiUrl: string) => any;
    }

    webApi.$inject = ["$http", "$templateCache", "$q"];

    function webApi($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService, $q: ng.IQService): IWebApi {

        var factory: IWebApi = {
            withParameter: withParameter,
            nonParameter: nonParameter
        };

        return factory;

        function withParameter(methodType, webApiUrl, parameterObject) {
            var deferred = $q.defer();
            $http({
                method: methodType,
                url: webApiUrl, //window.location.protocol + '//' + window.location.host + window.location.pathname +
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
}