(function(){
    angular.module('resumeApp').directive('proficiencyDirective', function(){
        return {
            link : function(scope, element, attrs){
                console.log('Inside proficiencyDirective');
                //if(attrs.text === 'html5')
                    element.percircle({ text: attrs.text, percent : Number(attrs.percent)});
                //else
                //    element.percircle({ text: 'English', percent : 80 });
                componentHandler.upgradeAllRegistered();
                /*element.on('click', function(){
                    element.html('Oh, You clicked me!')
                });

                element.bind('mouseenter', function(){
                    element.css('background-color', 'yellow');
                });

                element.bind('mouseleave', function(){
                    element.css('background-color', 'lightgrey');
                });*/
            }

        }


    });




}());