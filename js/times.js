  jQuery(document).ready(function($){
    //funcion encargada de inicializar el reconocimiento de las ventanas modales por parte de los botones
    
    //capturamos la url, y obtenemos los valores de las rutas que el usuario desea monitorizar
    var rutasSeleccionadas = window.location.search.split("=")[1].split(",");
    console.log(rutasSeleccionadas);
    //colocar las rutas agregadas de buses
    //$(".bloque1").html("RUTA "+rutasSeleccionadas);

    $.getJSON("http://localhost:8000/data/rutas.json").
      success(function(data) {
      $.rutas = data;

    var disEE = 100, //esta variable define la distancia entre estaciones en pixeles
        itinerarios = [], //alacenamos cada una delas rutas
        idRutas = 0;
  /*En el siguiente for miramos y agregamos cuales de las rutas que selecciono el usuario son las que se deben mostrar
  */
    for (var i = 0; i < rutasSeleccionadas.length; i++) {
      for (var j = 0; j < data.length; j++) {
        //console.log(data.length+"   "+rutasSeleccionadas[i]+"    "+data[j].nombre);
        if (rutasSeleccionadas[i] == data[j].nombre ) {
          itinerarios.push(new Recorridos(disEE, data[j].nombre,data[j].paradas,idRutas,data[j].color));
          idRutas++;

        }

      }
    }//*/
    //parametros necesarios(obligatorios), hora de salida, numero de buses, distancia entre estaciones, vector de paradas
    //ese vector viene del .json tiene un formato especifico, y un id del numero del recorrido segun el día
   
/**/
    for (var i = 0; i < itinerarios.length; i++) {
      monitoreoUnico(rutasSeleccionadas[i], itinerarios[i]);
      console.log(i);
    };

/*/
//monitoreoUnico(rutasSeleccionadas[1], itinerarios[1])
    

/*

    it =new Recorridos(nombreRuta,disEE,paradas,0);
    it1 =new Recorridos(data[1].nombre,disEE,data[1].paradas,1);
    it2 =new Recorridos(data[2].nombre,disEE,data[2].paradas,2);
    it3 =new Recorridos(data[2].nombre,disEE,data[2].paradas,3);*/

    //mira y me informa cando el usuario le da click a la x para eliminar una ruta
    $(".cajarr").on('click','input',function() {
      
      s =$(this);
      delete itinerarios[s.val()];
       //console.log("lo selecciono .cajaR"+s.val());
        ruta = $(".cajaR"+s.val());
        ruta.find('.timelinem').css('height','0px');
        ruta.find(".cerrar").css('display','none');
        //se selecciono una opcion
        setTimeout(function() {
        // rest of code here
            ruta.remove();
            
            }, 1000);
     
     });



  function monitoreoUnico (nombreRuta, rutaAProcesada, id) {
       $.getJSON("http://localhost:8000/data/buses"+nombreRuta+".json").
          success(function(dataB) {
          $.bus = dataB;
          var buses = [],
              recorridos = dataB;
/**/
          for (var i = 0; i < recorridos.length; i++) {
            buses.push(recorridos[i][0].idRecorrido);
            rutaAProcesada.agregarRecorrido(nombreRuta,recorridos[i][0].idRecorrido,recorridos[i][0].id);
        }

//* */
       
          var b = 0;
            setInterval(function () {

              if (b<recorridos[0].length) {
           //console.log(data[0].Nombre);

           indices = rutaAProcesada.getVectorIndices(buses);
           //console.log(busesAceptados);

           for (var i = 0; i < indices.length; i++) {
             //console.log(busesAceptados.length);
             rutaAProcesada.actualizarBus($("#"+recorridos[indices[i]][b].idRecorrido+""+nombreRuta),recorridos[indices[i]][b]);
              
           }
             b++;
           }else {
             b=0;
           }
                
                                  },1000);
      });
  }

  //fin de la funcion
      
  });
})
