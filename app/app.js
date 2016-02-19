(function() {
   // var custApp = angular.module('customerApp', ['ngRoute', 'ngAnimate']);
    var app = angular.module('resumeApp', ['ngRoute', 'ngAnimate']);
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'app/views/home.html'
            })
            .when('/resume', {
                controller: 'ResumeController',
                templateUrl: 'app/views/resume.html'
            })
            .when('/resume-timeline', {
                controller: 'ResumeController',
                templateUrl: 'app/views/resume-timeline.html'
            })
            .when('/profile', {
                controller: 'ProfileController',
                templateUrl: 'app/views/profile.html'
            })
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'app/views/register.html'
            })
            .when('/test', {
                controller: 'RegisterController',
                templateUrl: 'app/views/test.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

    app.run(function($rootScope, $location, $timeout) {
        $rootScope.$on('$viewContentLoaded', function() {
            $timeout(function() {
                componentHandler.upgradeAllRegistered();
            });
        });
    });

}());




(function(){
    $('#create_pdf').on('click',function(){
        $('body').scrollTop(0);
        genPDF();
    });

    function genPDF(){
        var form = $('.slide-animations');
        html2canvas(form, {
            onrendered: function(canvas){
                var img = canvas.toDataURL("image/png");
                var doc = new jsPDF();
                doc.addImage(img, "JPEG", 10, 10);
                doc.save('msk-test.pdf');
            }
        });
    }

 /*var a4  =[ 595.28,  841.89];  // for a4 size paper width and height

$('#create_pdf').on('click',function(){
 $('body').scrollTop(0);
 createPDF();
});
//create pdf
function createPDF(){
    var form = $('.demo-content');
    var cache_width = form.width();

    getCanvas().then(function(canvas){
    var img = canvas.toDataURL("image/png"),
      doc = new jsPDF({
              unit:'px',
              format:'a4'
            });
            doc.addImage(img, 'JPEG', 20, 20);
            doc.save('msk-html-to-pdf.pdf');
            form.width(cache_width);
     });
}

// create canvas object
function getCanvas(){
    var form = $('.demo-content')
     form.width((a4[0]*1.33333) -40).css('max-width','none');
     return html2canvas(form,{
         imageTimeout:2000,
         removeContainer:true
        });
}*/

}());