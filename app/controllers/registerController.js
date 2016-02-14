(function() {

    var RegisterController = function ($scope, $log, $window, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        $scope.name  = 'Shahid';
        $scope.email = 'shahid.manit@gmail.com';
        $scope.phone  =  4051234567;


        function init() {
        }

/*        $scope.showModalHere = function() {
            console.log("Button Action Here");
            showDialog({
              title: 'Action',
              text: 'Text to display',
              negative: {
                  title: 'Nope'
              },
              positive: {
                  title: 'Yay',
                  onClick: function (e) {
                      alert('Action performed!');
                  }
              }
            });
        }

*/
        init();

        $scope.registerUser = function(scope, Form){
            console.log("Form submit " + $scope.customers);


        }

    };


    RegisterController.$inject = ['$scope', '$log', '$window', 'customersFactory',
                                   'appSettings'];

    angular.module('resumeApp')
      .controller('RegisterController', RegisterController);

}());