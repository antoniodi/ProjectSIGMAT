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

      modal = new vModalMulti(data, rutasSeleccionadas);

    var disEE = 100, //esta variable define la distancia entre estaciones en pixeles
        itinerarios = [], //alacenamos cada una delas rutas
        idRutas = 0;
  
        addRutas(rutasSeleccionadas);

        //funcion que captura el click del modal que permite motirozar las rutas en lineas de tiempo
      $('.amodal1').click(function () {

        seleccionadasC = []
      //funcion que se encarga de capturar las opciones seleccionadas por el usuario
        $('input:checkbox[name=rutas]').each(function()
          {
              if($(this).is(':checked'))
              //alacenamos las rutas seleccionadas
                seleccionadasC.push($(this).val());

          });
      //en caso de que el usuario no seleccione ninguna opcion
        if (seleccionadasC.length == 0) {
          Materialize.toast('¡Porfavor, Seleccione almenos una ruta!', 5000);
        }
        //en caso de que el usuario no seleccione ninguna opcion
        else if ((seleccionadasC.length+ rutasSeleccionadas.length) > 5) {
          Materialize.toast('¡Lo sentimos, Maximo puede monitorizar 5 rutas simultaneamente!', 5000);
        }
      //en caso de que el usuario agregar una o mas rutas para monitorizar
        else {
             
              for (var i = 0; i < seleccionadasC.length; i++) {
                rutasSeleccionadas.push(seleccionadasC[i]);
               };  
              //console.log(seleccionadasC);
             addRutasAdicionaes(seleccionadasC);

             

        }
      });






/*En el siguiente for miramos y agregamos cuales de las rutas que selecciono el usuario son las que se deben mostrar
  */
function addRutas (rutasSeleccionadas) {
  for (var i = 0; i < rutasSeleccionadas.length; i++) {
      for (var j = 0; j < data.length; j++) {
        //console.log(data.length+"   "+rutasSeleccionadas[i]+"    "+data[j].nombre);
        if (rutasSeleccionadas[i] == data[j].nombre ) {
          itinerarios.push(new Itinerarios(disEE, data[j].nombre,data[j].paradas,idRutas,data[j].color));
          idRutas++;

        }

      }
    }
    
  for (var i = 0; i < itinerarios.length; i++) {
      monitoreoUnico(rutasSeleccionadas[i], itinerarios[i]);   
    };  
}
 
 /*En el siguiente for miramos y agregamos cuales de las rutas que selecciono el usuario son las que se deben mostrar
  */
function addRutasAdicionaes (rutasSeleccionadas) {
  indiceAnterior = Itinerarios.length;
  indice = 0;
  for (var i = 0; i < rutasSeleccionadas.length; i++) {
      for (var j = 0; j < data.length; j++) {
        //console.log(data.length+"   "+rutasSeleccionadas[i]+"    "+data[j].nombre);
        if (rutasSeleccionadas[i] == data[j].nombre ) {
          itinerarios.push(new Itinerarios(disEE, data[j].nombre,data[j].paradas,idRutas,data[j].color));
          idRutas++;

        }

      }
    }
    
  for (var i = indiceAnterior; i < itinerarios.length; i++) {
      monitoreoUnico(rutasSeleccionadas[indice], itinerarios[i]);
      indice++;   
    };  
} 
  
   

    //*/
    //parametros necesarios(obligatorios), hora de salida, numero de buses, distancia entre estaciones, vector de paradas
    //ese vector viene del .json tiene un formato especifico, y un id del numero del recorrido segun el día
   
/**/
    

/*/
*/

    //mira y me informa cando el usuario le da click a la x para eliminar una ruta
    $(".cajarr").on('click','input',function() {
      
      s =$(this);
      val = s.val();
      
      rutasSeleccionadas = $(rutasSeleccionadas).not([itinerarios[val].nomRuta]);
      modal.setRutasActivas($(rutasSeleccionadas).not([itinerarios[val].nomRuta]));
      delete itinerarios[val];

       //console.log("lo selecciono .cajaR"+s.val());
        ruta = $(".cajaR"+val);
        ruta.find('.timelinem').css('height','0px');
        ruta.find(".cerrar").css('display','none');

        //se selecciono una opcion
        setTimeout(function() {
        // rest of code here
            ruta.remove();
            
            }, 1000);
     
     });



  function monitoreoUnico (nombreRuta, rutaAProcesada) {
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
              console.log();
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
