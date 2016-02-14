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

            $scope.proficiencyArr = [
                {text: 'Javascript', percent: 95, color: "orange small"},
                {text: 'AngularJS', percent: 90, color: "orange small"},
                {text: 'NodeJS', percent: 85, color: "orange small"},
                {text: 'HTML5', percent: 90, color: "red small"},
                {text: 'MDL', percent: 90, color: "red small"},
                {text: 'Bootstrap', percent: 90, color: "red small"},
                {text: 'Java', percent: 90, color: "red medium"}
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

        $scope.$watch('detailsMain', function(){
            console.log("detailsMain Watch");
            /*if (this.last === true)
                $scope.edit = true;
            else
                $scope.edit = false;*/
        });



        $scope.editContact = function (obj) {
            $scope.edit = true;
            $scope.personalDetails = angular.copy($scope.pd);
        };

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };


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


     /* $scope.contactList = {
            "selected": {},
            "data":     [
            {
                "id": 10001,
                "name": "Shahid",
                "fav1": "facebook.com",
                "fav2": "twitter.com",
                "city": "Norman",
                "country": "USA"
            },
            {
                "id": 10002,
                "name": "Madhu",
                "fav1": "google.com",
                "fav2": "ndtv.com",
                "city": "Norman",
                "country": "USA"
            },
            {
                "id": 10003,
                "name": "Shravani",
                "fav1": "apple.com",
                "fav2": "facebool.com",
                "city": "Edmond",
                "country": "USA"
            },
            {
                "id": 10004,
                "name": "Varada",
                "fav1": "craigslist.com",
                "fav2": "yahoo.com",
                "city": "Moore",
                "country": "USA"
            },
            {
                "id": 10005,
                "name": "Sudeep",
                "fav1": "facebook.com",
                "fav2": "twitter.com",
                "city": "Tulsa",
                "country": "USA"
            },
            {
                "id": 10006,
                "name": "Sandeep",
                "fav1": "yahoo.com",
                "fav2": "yahoo.com",
                "city": "Tulsa",
                "country": "USA"
            }
        ] } ;
 */

}());