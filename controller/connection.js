angular.module('myApp', [])

.controller('FirstCtrl', function($scope,$http) {
$http.get('http://localhost:8003/data/coordenadas.json').
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

    crearGrafica(b);

  },1000);

};


$.getJSON("../data/ruta1.json", function(datos) {
		$.coordenadas=datos;
    graficarTiempo(datos)
      })


function crearGrafica(c) {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Contraste de hipóstesis ideal'
        },
        xAxis: {
            categories: ['Hipótesis ideal', 'Simulación 1', 'Simulación 2<br>Hora salida: 6:10']
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
            data: [20, 10, c]
        }]
    });
}


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
