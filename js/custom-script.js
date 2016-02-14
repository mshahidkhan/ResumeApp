$(document).ready(function(){

  //timelineView();
  //barDnCharts();
  //technoView();

  $("#lang-1").percircle({ text: "English", percent : "80"});
  $("#lang-2").percircle({ text: "Hindi", percent : "98"});

  $("#skill-1").percircle({ text: "Javascript", percent : "80"});
  $("#skill-2").percircle({ text: "AngularJS", percent : "80"});
  $("#skill-3").percircle({ text: "Angular2", percent : "60"});
  $("#skill-4").percircle({ text: "NodeJS", percent : "60"});
  $("#skill-5").percircle({ text: "Java", percent : "85"});
  $("#skill-6").percircle({ text: "DB", percent : "85"});

});

function barDnCharts(){

        var ctx1 = $('#mycanvas1').get(0).getContext("2d");
        var data1 = [
          {
            value: 270,
            color: "lightblue",
            highlight: "brown",
            label: "javascript"
          }
        ];
        var chart1 = new Chart(ctx1).Doughnut(data1);

        var ctx2 = $('#mycanvas2').get(0).getContext("2d");
        var data2 = [
          {
            value: 120,
            color: "orange",
            highlight: "brown",
            label: "javascript"
          }
        ];
        var chart2 = new Chart(ctx2).Doughnut(data2);

        var ctx3 = $('#mycanvas3').get(0).getContext("2d");
        var data3 = [
          {
            value: 270,
            color: "lightgreen",
            highlight: "brown",
            label: "javascript"
          }
        ];
        var chart3 = new Chart(ctx3).Doughnut(data3);


        //BAR CHART
        var barctx1 = $('#bar1').get(0).getContext("2d");
        var barData = {
          labels: ["javascript", "HTML5", "AngularJS", "TDD"],
          datasets: [
              {
                  label: "My First dataset",
                  fillColor: "lightblue",
                  strokeColor: "red",
                  highlightFill: "lightgreen",
                  highlightStroke: "yellow",
                  data: [65, 59, 80, 81]
              }
          ]
        };
        var myBarChart = new Chart(barctx1).Bar(barData);
}

function timelineView(){
  google.charts.load('current', {'packages':['gantt']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Clients');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([
      ['accenture', 'Accenture', 'Nokia, Telecom Malaysia',
       new Date(2006, 5, 01), new Date(2010, 7, 01), null, 100, null],
      ['hitachi', 'Hitachi Consulting', 'NetApp',
       new Date(2010, 7, 01), new Date(2011, 10, 30), null, 100, null],
      ['tcs', 'TCS', 'Motorola Mobility/ARRIS, GE Oil & Gas',
       new Date(2011, 11, 01), new Date(), null, 100, null]]);

    var options = {
      gantt: {
        trackHeight: 30,
        criticalPathEnabled : false,
        barHeight: 16,
        innerGridHorizLine: 0,
        labelStyle: {
          fontSize: 14,
          color: '#ffbbgg'
        }
      }
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

    chart.draw(data, options);
  }
};



function technoView(){
   //google.load("visualization", "1", {packages:["corechart"]});

      google.setOnLoadCallback(drawChart1);
      function drawChart1() {
        var genX = 15;
        var data = google.visualization.arrayToDataTable([
          ['ID', 'X', 'Y', 'Expertise'],
          ['Javascript',        genX+18,  125, 100],
          ['Material Design',   genX+2,  120,  80],
          ['Bootstrap',         genX+2,  80,  80],
          ['NodeJS',            genX+25,  100, 50],
          ['ReactJS',           genX+28,  140, 100],
          ['AngularJS',         genX+10,  105, 95],
          ['Angular2',          genX+10,  145, 95],
          ['API',               genX+20,  65, 50],
          ['DB',                genX+28,  60, 50],
          ['Java',              genX+38,  30, 20],
          ['',   0,  0,      0]
        ]);

        var options = {
          colorAxis: //{colors: ['white', 'red', 'orange','lightblue', 'green'],
                    {colors: ['white', 'red', 'orange','lightblue', 'green'],
                     legend:{position: 'none'}},
          sizeAxis:{minsize: 5, maxSize: 50},
          vAxis: {
            gridlines:{count: 0},
            baselineColor: '#fff',
            baseline: 10
          },
          hAxis: {
            gridlines:{count: 0},
            baselineColor: '#fff',
            baseline: 50
          },
          chartArea:{
            left: 20,
            top: 10,
            width: '80%',
            height: '100%'
          },

          bubble: {
            opacity: 0.4,
            stroke: 'none',
            strokeWidth: 0,
            textStyle: {
              stroke: 'none',
              strokeWidth: 0,
              fontSize: 12,
              color: 'black',
              bold: false,
              italic: false
            }
          },
          animation: {
            duration: 3000,
            easing: 'out',
            startup: true
          },
          tooltip: {trigger: 'none'}
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('chart_div1'));
        chart.draw(data, options);
      }
};



   // var custApp = angular.module('customerApp', ['ngRoute', 'ngAnimate']);
    var app = angular.module('resumeApp', ['ngAnimate']);


    app.run(function($rootScope, $location, $timeout) {
        $rootScope.$on('$viewContentLoaded', function() {
            $timeout(function() {
                componentHandler.upgradeAllRegistered();
            });
        });
    });

