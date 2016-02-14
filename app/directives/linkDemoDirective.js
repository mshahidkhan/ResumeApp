(function(){
    angular.module('resumeApp').directive('myDomDirective', function(){
        return {
            link : function(scope, element, attrs){
                element.on('click', function(){
                    element.html('Oh, You clicked me!')
                });

                element.bind('mouseenter', function(){
                    element.css('background-color', 'yellow');
                });

                element.bind('mouseleave', function(){
                    element.css('background-color', 'lightgrey');
                });
            }

        }


    });




}());