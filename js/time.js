

  jQuery(document).ready(function($){

    //capturamos la url, y obtenemos los valores de las rutas que el usuario desea monitorizar
    var rutaSeleccionada = window.location.search.split("=")[1];
    console.log(rutaSeleccionada);

    $.getJSON("http://localhost:8000/data/rutas.json").
      success(function(data) {
      $.rutas = data;

      //buscamos la ruta pertenecie en el array de rutas, para obtener la informacion de la ruta seleccionada
      for (var i = 0; i < data.length; i++) {
        if (data[i].nombre == rutaSeleccionada) {
          //alamacenamos los valores la ruta seleccionada, como el nombre de las estaciones
          rutaElegida = data[i];

        }
      }
    var disEE = 100, //esta variable define la distancia entre estaciones en pixeles
        paradas = rutaElegida.paradas; //el indice marca la ruta, en este caso se selecciona la primera ruta del json
    //creamos un nuevo itinerario, que sera un objeto que contiene todos los recorridos
    //var it = new itinerario(disEE,rutaElegida.paradas)
/*
    for (var j = 0; j < data.length; j++) {
      console.log(data.length+"   "+rutasSeleccionada+"    "+data[j].nombre);
      if (rutasSeleccionada == data[j].nombre ) {
        itinerarios.push(new Recorridos(data[j].nombre,disEE,data[j].paradas,nRutas));
      }*/

        //hacemos este llamado para capturar l número de buses iniciales
        $.getJSON("http://localhost:8000/data/buses"+rutaSeleccionada+".json").
             success(function(dataB) {
             $.bus = dataB;
              var nBuses=dataB.recorridos.length;

                  it =new Itinerario(disEE,paradas,nBuses);

});

});

                  $.getJSON("http://localhost:8000/data/busesR1.json").
                             success(function(dataB) {
                               $.bus = dataB;

                    b=0;
            setInterval(function () {

                         if (b<dataB.recorridos[0].distancia.length) {
                           //console.log(data[0].Nombre);
                           //recorremos el

                           for (var i = 0; i < dataB.recorridos.length; i++) {
                             setPosTimelineB($(".bus").eq(i),dataB.recorridos[i].distancia[b]);
                           }
                       b++;
                     }else {
                       b=0;
                     }
             },1000);
                 });

   })
