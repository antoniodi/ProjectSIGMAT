function itinerario(nBuses,nEstaciones,disEE) {
  var body=$(".caja"), //raiz para la creacion de las lineas de tiempo para los buses
      recorridos=[],
      estaciones=[],
      lineasContol=[];

    body.append("<div class=timeline0><div id=recorrido class=line><ol class=linei></ol> </div> <div class=datos>hora"+0+" de salida</div></div>");
  var timeline=$(".timeline0"),
      datos=timeline.children(".datos"),
      line=timeline.children(".line"),
      lineG=line.children(".linei");
      //agregamos las lineas de estaciones, se les asigno la clase estacione1 para poder manejar un estylos diferente (css)
      for (var i = 0; i < nEstaciones; i++) {
        estaciones.push("<li class=estacion1></li>")
        //lineG.append("<li class=estacion1></li>")
      }
      lineG.append(estaciones.join(""));
      //creamos las lineas de control que nos indicaran de forma parcial el estado del recorrido
      for (var i = 0; i < nEstaciones; i++) {
        lineasContol.push("<div class=lineT style=left:"+120*i+"px></div>")
        //lineG.append("<li class=estacion1></li>")
      }
        lineG.append(lineasContol.join(""));
      // se hace la nueva llamada desde este lugar debido a que en la anteror linea se estaban agregando las estaciones
      // y en ese momento no se contaba con esos elementos en el DOM
    var lineLi=lineG.children(".estacion1");
      for (var i = 0; i < nEstaciones; i++) {
            setPosTimelineE(i,disEE,lineLi.eq(i));
          }
      //agregando todos los buses de los que se dispone y ocultandolos para usarlos cuando sea necesario
      lineG.append('<li class=bus></li>')
      setTimelineWidth(disEE,timeline,nEstaciones);
      var estBus=$('#recorrido').html()
      //se guarda primero la informacion del DOM en un array debido al costo computacion elevado de la funcion "append" de jQuery
      for (var i = 0; i < nBuses-1; i++) {
        recorridos.push("<div class=timeline0><div class=line>"+estBus+"</div> <div class=datos>hora"+(i+1)+" de salida</div></div>");
      }
      body.append(recorridos.join(''));

  //se encarga de agregar un recorrido al final
  this.agregarRecorrido=function(info){
    body.append("<div class=timeline0><div class=line>"+estBus+"</div> <div class=datos>hora de salida:</br>"+info+"</div></div>");
  }
  //Se encarga de eliminar un recorrido, una vez que el bus ha completado su trayecto y ya no se encuentra en el itinerario
  //se usa un indice para este evento ya que es posible que un bus adelante a otro por lo que no siempre el primero en entrar es el primero en salir
  this.eliminarRecorrido=function (indice) {
    var time =$('.timeline0');
    if (time.length-1<indice) {
      console.log("el sistemas no cuenta con buses");
    }
    else {
      time[indice].remove();
    }
  }



}
