var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.selection', 'ui.grid.exporter']);

var rutaSeleccionada = window.location.search.split("=")[1];
    console.log(rutaSeleccionada);
  $("#cajaletreroinformaciontexto1").html("RUTA "+rutaSeleccionada);
app.controller('MainCtrl', ['$scope', '$http','i18nService', function ($scope, $http, i18nService ) {

 /*$scope.deleteRow = function(row) {
    var index = $scope.gridOptions.data.indexOf(row.entity);  
    $scope.gridOptions.data.splice(index, 1);
  };
*/
    $scope.gridOptions = {
    enableSorting: true,
    minimumColumnSize: 90,
     showGridFooter:true,
    columnDefs: [
      
      // {name: 'Eliminar', width: '7%', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.deleteRow(row)">Eliminar</button>'},
      // {field: 'Clave', width: '6%'},
      {field: 'Bus', width: '8%', name:'Id Bus', visible:false},
      {field: 'Conductor', width: '9%'},
      {field: 'Recorrido',  name:'Ruta', width: '6%'},
      {field: 'EstaTerminado',  name:'Est', width: '4%', 
    cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
          if (grid.getCellValue(row,col) == true) {
            return 'red1';
          }
          else {
            return 'green';
          }
        }
      },
      {field: 'HoraSalidaEstimada', name:'H.S.E', visible:false, width: '7%', cellFilter: 'date:\'HH:mm:ss\''},
      {field: 'HoraSalidaReal', name:'Salida', width: '7%', visible:false, cellFilter: 'date:\'HH:mm:ss\''},
{field: 'diferencia', name:'Salida', width: '6%',
cellTemplate: "<div style='cursor:pointer' ng-click='grid.appScope.diferenciaSalida.formatDateTime(row.entity.Recorrido, row.entity.HoraSalidaEstimada,row.entity.HoraSalidaReal)' ng-class='{\"red\":row.entity.HoraSalidaReal > row.entity.HoraSalidaEstimada, \"blue\":row.entity.HoraSalidaReal < row.entity.HoraSalidaEstimada}' class='ui-grid-cell-contents' >{{grid.appScope.diferencia.restaHoras(row.entity.HoraSalidaEstimada-row.entity.HoraSalidaReal,row.entity.HoraSalidaEstimada) }}</div>"
},
      {field: 'HorarioEstimado.ST1', name:'H.E-est1', width: '8%', visible:false,},
      {field: 'HorarioReal.ST1', name:'llegada E1', width: '10%', visible:false
      },
{field: 'diferencia1', name:'Lagos', width: '7.5%',
cellTemplate: "<div style='cursor:pointer' ng-click='grid.appScope.diferencia1.formatDateTime(row.entity.Recorrido, row.entity.HorarioEstimado.ST1,row.entity.HorarioReal.ST1)' ng-class='{\"red\":row.entity.HorarioReal.ST1 > row.entity.HorarioEstimado.ST1, \"blue\":row.entity.HorarioReal.ST1 < row.entity.HorarioEstimado.ST1}' class='ui-grid-cell-contents' >{{grid.appScope.diferencia.restaHoras(row.entity.HorarioEstimado.ST1-row.entity.HorarioReal.ST1,row.entity.HorarioEstimado.ST1) }}</div>"
},      
      {field: 'HorarioEstimado.ST2', name:'H.E-est2', visible: false, width: '8%'},
      {field: 'HorarioReal.ST2', name:'llegada E2', width: '10%',visible:false
      },
{field: 'diferencia2', name:'Cañaveral', width: '7.5%',
cellTemplate: "<div style='cursor:pointer' ng-click='grid.appScope.diferencia1.formatDateTime(row.entity.Recorrido, row.entity.HorarioEstimado.ST2,row.entity.HorarioReal.ST2)' ng-class='{\"red\":row.entity.HorarioReal.ST2 > row.entity.HorarioEstimado.ST2, \"blue\":row.entity.HorarioReal.ST2 < row.entity.HorarioEstimado.ST2}' class='ui-grid-cell-contents' >{{grid.appScope.diferencia.restaHoras(row.entity.HorarioEstimado.ST2-row.entity.HorarioReal.ST2,row.entity.HorarioEstimado.ST2) }}</div>"
}, 
      {field: 'HorarioEstimado.ST3', name:'H.E-est3', visible: false, width: '8%'},
      {field: 'HorarioReal.ST3', name:'llegada E3', width: '10%',visible:false
      },
{field: 'diferencia3', name:'Molinos', width: '7.5%',
cellTemplate: "<div style='cursor:pointer' ng-click='grid.appScope.diferencia1.formatDateTime(row.entity.Recorrido, row.entity.HorarioEstimado.ST3,row.entity.HorarioReal.ST3)' ng-class='{\"red\":row.entity.HorarioReal.ST3 > row.entity.HorarioEstimado.ST3, \"blue\":row.entity.HorarioReal.ST3 < row.entity.HorarioEstimado.ST3}' class='ui-grid-cell-contents' >{{grid.appScope.diferencia.restaHoras(row.entity.HorarioEstimado.ST3-row.entity.HorarioReal.ST3,row.entity.HorarioEstimado.ST3) }}</div>"
}, 
      {field: 'HorarioEstimado.ST4', name:'H.E-est4', visible: false, width: '8%'},
      {field: 'HorarioReal.ST4', name:'llegada E4', width: '10%', visible:false
      },
{field: 'diferencia4', name:'Payador', width: '7.5%',
cellTemplate: "<div style='cursor:pointer' ng-click='grid.appScope.diferencia1.formatDateTime(row.entity.Recorrido, row.entity.HorarioEstimado.ST4,row.entity.HorarioReal.ST4)' ng-class='{\"red\":row.entity.HorarioReal.ST4 > row.entity.HorarioEstimado.ST4, \"blue\":row.entity.HorarioReal.ST4 < row.entity.HorarioEstimado.ST4}' class='ui-grid-cell-contents' >{{grid.appScope.diferencia.restaHoras(row.entity.HorarioEstimado.ST4-row.entity.HorarioReal.ST4,row.entity.HorarioEstimado.ST4) }}</div>"
}, 
      {field: 'HorarioEstimado.ST5', name:'H.E-est5', visible: false, width: '8%'},
      {field: 'HorarioReal.ST5', name:'llegada E5', width: '10%', visible:false
      },
{field: 'diferencia5', name:'Provenza', width: '7.5%',
cellTemplate: "<div style='cursor:pointer' ng-click='grid.appScope.diferencia1.formatDateTime(row.entity.Recorrido, row.entity.HorarioEstimado.ST5,row.entity.HorarioReal.ST5)' ng-class='{\"red\":row.entity.HorarioReal.ST5 > row.entity.HorarioEstimado.ST5, \"blue\":row.entity.HorarioReal.ST5 < row.entity.HorarioEstimado.ST5}' class='ui-grid-cell-contents' >{{grid.appScope.diferencia.restaHoras(row.entity.HorarioEstimado.ST5-row.entity.HorarioReal.ST5,row.entity.HorarioEstimado.ST5) }}</div>"
}     

    ],
    maxWidth:9,
    minWidth:6,
    rowHeight: 35,
    exporterMenuCsv: false,
    enableGridMenu: true,
    enableSelectAll: true,
    //exporterCsvFilename: 'myFile.csv',
    exporterPdfDefaultStyle: {fontSize: 8},
    exporterPdfTableStyle: {margin: [10, 10, 10, 10]},
    exporterPdfTableHeaderStyle: {fontSize: 9, bold: true, italics: true, color: 'red'},
    exporterPdfHeader: { text: "Ruta:", style: 'headerStyle' },
    exporterPdfFooter: function ( currentPage, pageCount ) {
      return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
    },
    exporterPdfCustomFormatter: function ( docDefinition ) {
      docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
      docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
      return docDefinition;
    },
    exporterPdfOrientation: 'landscape',
    exporterPdfPageSize: 'LETTER',
    exporterPdfMaxGridWidth: 450,
    //exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    onRegisterApi: function(gridApi){
      $scope.gridApi = gridApi;
    }
  };
  i18nService.setCurrentLang('es');

  $scope.diferenciaSalida = {
       formatDateTime(rec,est,real) {
         
         function addZ(n) {
            return (n<10? '0':'') + n;}
    var est = new Date(est);
    var real = new Date(real);
    alert('Ruta: '+rec +'\n'+'Hora de salida estimada: '+ addZ(est.getHours())+':'+addZ(est.getMinutes())+':'+addZ(est.getSeconds())+'\n'+  'Hora de salida real: '+ addZ(real.getHours())+':'+addZ(real.getMinutes())+':'+addZ(real.getSeconds()));
      }
    };

    $scope.diferencia1 = {
       formatDateTime(rec,est,real) {
         
         function addZ(n) {
            return (n<10? '0':'') + n;}
    var est = new Date(est);
    var real = new Date(real);
    alert('Ruta: '+rec +'\n'+'Hora de llegada estimada a la estación: '+ addZ(est.getHours())+':'+addZ(est.getMinutes())+':'+addZ(est.getSeconds())+'\n'+  'Hora de llegada real a la estación: '+ addZ(real.getHours())+':'+addZ(real.getMinutes())+':'+addZ(real.getSeconds()));
      }
    };

    $scope.diferencia = {
      restaHoras: function(val,est) {
         if(val === est){
          var val = "-";
          return val;
         }
         else{
    var ms = val % 1000;
    val = (val - ms) / 1000;
    var secs = val % 60;
    val = (val - secs) / 60;
    var mins = val % 60;
    var hrs = (val - mins) / 60;
    return mins+ ' Min';
         }
   
      }
    };

var pnt = function(){
  $http.get("http://localhost:8000/data/Tabla"+rutaSeleccionada+".json")
    .success(function(data) {
      $scope.gridOptions.data = data;
    });  
  };

//Almacenamos las referencias al elemento, para que así no tengamos que buscarlo en el DOM cada que se ejecute el interval, y a la función así no se carga cada vez en memoria
  function initPnt( pnt, time ){
     return setInterval(pnt, time);
    };

//Ejecutamos la funcion pnt
pnt();
// activamos el intipnt para realizar peticiones cada 5 segundos 
initPnt(pnt, 10000);
  
}]);




