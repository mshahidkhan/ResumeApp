(function() {
    var customersFactory = function($http) {

        var factory = {};

        return factory;
    };

    customersFactory.$inject = ['$http'];

    angular.module('resumeApp').factory('customersFactory',
                                           customersFactory);

}());