(function() {

    var HomeController = function ($scope, $log, $window, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            /*document.getElementById("lang-1").percircle({ text: "English", percent : "80"});
            document.getElementById("lang-2").percircle({ text: "Hindi", percent : "98"});

            document.getElementById("skill-1").percircle({ text: "Javascript", percent : "80"});
            document.getElementById("skill-2").percircle({ text: "AngularJS", percent : "80"});
            document.getElementById("skill-3").percircle({ text: "Angular2", percent : "60"});
            document.getElementById("skill-4").percircle({ text: "NodeJS", percent : "60"});
            document.getElementById("skill-5").percircle({ text: "Java", percent : "85"});
            document.getElementById("skill-6").percircle({ text: "DB", percent : "85"});*/

        }

        init();


    };

    HomeController.$inject = ['$scope', '$log', '$window', 'customersFactory',
                                   'appSettings'];

    angular.module('resumeApp')
      .controller('HomeController', HomeController);

}());