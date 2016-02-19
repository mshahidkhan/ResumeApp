(function() {

    var ResumeController = function ($scope, $log, $window, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;
        $scope.edit = false;


        function init() {
            $scope.personalDetails = {
                fullname: 'Shahid',
                email:'shahid@khan.com',
                phone:12345647890
            };
            $scope.pd = {
                fullname: 'Shahid Khan',
                email:'sk@khan.com',
                phone: 9876543210
            };

            //ajax call
            $scope.proficiencyArr = [
                {text: 'JS', percent: 85, color: "orange small"},
                {text: 'AngularJS', percent: 90, color: "orange small"},
                {text: 'NodeJS', percent: 85, color: "orange small"},
                {text: 'HTML5', percent: 90, color: "red small"},
                {text: 'MDL', percent: 90, color: "red small"},
                {text: 'Bootstrap', percent: 90, color: "red small"},
                {text: 'Java', percent: 90, color: "red small"}
                ];

            $scope.languageArr = [
                {text: 'English', percent: 90, color: "orange small"},
                {text: 'Hindi', percent: 100, color: "orange small"}
            ];

            $scope.skills = [
                {name: 'JS', percent: "50"},
                {name: 'AngularJS', percent: "75"},
                {name: 'Angular2', percent: "80"},
                {name: 'NodeJS', percent: "40"},
                {name: 'API', percent: "60"}
            ];


        }

        init();

        // gets the template to ng-include for a table row / item
        $scope.updateMdlElems = function (contact) {
            componentHandler.upgradeAllRegistered();
        };

        $scope.getEditTemplate = function () {
            if ($scope.editToggle === true){
                componentHandler.upgradeAllRegistered();
                return 'editForm';
            }

            else{

                componentHandler.upgradeAllRegistered();
                return 'displayOnly';
            }

        };

/*        $scope.$watch('detailsMain', function(){
            console.log("detailsMain Watch");
            if (this.last === true)
                $scope.edit = true;
            else
                $scope.edit = false;
        });

*/

        $scope.editContact = function (obj) {
            $scope.edit = true;
            $scope.personalDetails = angular.copy($scope.pd);
        };

/*        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };
*/

        $scope.saveContact = function (idx) {
            console.log("Saving contact");
            $scope.contactList.data[idx] = angular.copy($scope.contactList.selected);
            $scope.reset();
        };

        $scope.reset = function () {
            $scope.contactList.selected = {};
        };

    };


    ResumeController.$inject = ['$scope', '$log', '$window', 'appSettings'];

    angular.module('resumeApp')
      .controller('ResumeController', ResumeController);

}());