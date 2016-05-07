angular.module('myApp', [])

.controller('FirstCtrl', function($scope,$http) {
$http.get('http://localhost:8001/data/coordenadas.json').
    success(function(data) {
        $scope.coordenadas = data;
        console.log(data[0].Nombre);
    });
});

var linksp = $(".tabs_links");
var links = linksp.find('a');
var items = $('.items');
links.eq(0).add(items.eq(0)).addClass("active");
linksp.on('click','a',function() {
  var t =$(this);
  var i = t.index();
  t.add(items.eq(i)).addClass('active').siblings().removeClass('active');

});

function graficarTiempo(datos) {
  setInterval(function () {
    //data identifica una sola tonalidad
    chart.series[1].data[1].update(b)
    chart.series[3].data[2].update(b)
  },1000);

};

$.getJSON("http://localhost:8001/data/coordenadas.json", function(datos) {
		$.coordenadas=datos;
    graficarTiempo(datos)
      })


$('#container').highcharts({
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Contraste de hipóstesis ideal'
    },
    xAxis: {
        categories: ['Hipótesis ideal', 'Simulación 1<br>Hora salida: 6:00', 'Simulación 2<br>Hora salida: 6:10']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Tiempo total de recorrido [s]'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Estación Panamericano',
        data: [10,0,0]
      },{
          name: 'Hacia estación lagos',
          data: [20, 20,0]
      },{
          name: 'Estación lagos',
          data: [10, 10,0]
      },{
          name: 'hacia estación Panamericano',
          data: [20, 20, 20]
      }]
});
var chart = $('#container').highcharts();


/*
.controller('FirstCtrl', ['$scope', function($scope) {
   console.log("entro a mi controller");
}]);
*/
/*
function Ruta($scope, $http) {
    $http.get('http://localhost:8001/data/coordenadas.json').
        success(function(data) {
            $scope.coordenadas = data;
            console.log(data[0].Nombre);
        });
}
*/
/*
myApp.controller('FirstCtrl', function($scope,$http) {
$http.get('http://localhost:8001/data/coordenadas.json').
    success(function(data) {
        $scope.coordenadas = data;
        console.log(data[0].Nombre);
    });
});
*/

/*
function Ruta($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
}
*/
