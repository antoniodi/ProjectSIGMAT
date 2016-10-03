  jQuery(document).ready(function($){
    $.getJSON("http://localhost:8000/data/rutas.json").
      success(function(data) {
      $.rutas = data;

    var disEE=120, //esta variable define la distancia entre estaciones en pixeles
        paradas=data[0].paradas, //el indice marca la ruta, en este caso se selecciona la primera ruta del json
        horaSalida=data[0].horaSalida,
        nEstaciones=paradas.length;
        //hacemos este llamado para capturar l número de buses iniciales
        $.getJSON("http://localhost:8000/data/busesR1.json").
             success(function(dataB) {
             $.bus = dataB;
              var nBuses=dataB.length;
                  //parametros necesarios(obligatorios), hora de salida, numero de buses, distancia entre estaciones, vector de paradas
                  //ese vector viene del .json tiene un formato especifico, y un id del numero del recorrido segun el día
                  it =new Itinerarios(horaSalida,nBuses,disEE,paradas,0);
                  it1 =new Itinerarios(data[1].horaSalida,nBuses,disEE,data[1].paradas,1);
                  it2 =new Itinerarios(data[2].horaSalida,nBuses,disEE,data[2].paradas,2);
                  it2 =new Itinerarios(data[2].horaSalida,nBuses,disEE,data[2].paradas,3);
                  console.log(data[2].paradas);
});

});

                  $.getJSON("http://localhost:8000/data/busesR1.json").
                             success(function(dataB) {
                               $.bus = dataB;

                    b=0;
            setInterval(function () {

                         if (b<dataB[0].distancia.length) {
                           var vectorBuses=$(".bus");
                           //console.log(data[0].Nombre);
                           //recorremos el
                           for (var i = 0; i < dataB.length; i++) {
                             setPosTimelineB(vectorBuses.eq(i),dataB[i].distancia[b]);
                             setPosTimelineB(vectorBuses.eq(3+i),dataB[i].distancia[b]);
                             setPosTimelineB(vectorBuses.eq(6+i),dataB[i].distancia[b]);
                           }
                       b++;
                     }else {
                       b=0;
                     }
             },1000);
                 });

   })
