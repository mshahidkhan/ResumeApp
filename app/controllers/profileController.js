(function() {

    var ProfileController = function ($scope, $log, $window, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {

        }

        init();

    };

    ProfileController.$inject = ['$scope', '$log', '$window', 'customersFactory',
                                   'appSettings'];

    angular.module('resumeApp')
      .controller('ProfileController', ProfileController);

}());