function Itinerario(nBuses,disEE,paradas) {
  var nEstaciones=paradas.length;
      agregarCabecera(nEstaciones,paradas);
  var caja=$(".caja"), //raiz para la creacion de las lineas de tiempo para los buses
      estaciones=[],
      lineasContol=[];

      caja.append("<div class=timeline0><div id=recorrido class=line><ol class=linei></ol> </div> <div class=datos>hora"+0+" de salida</div></div>");
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
        lineasContol.push("<div class=lineT style=left:"+disEE*i+"px></div>")
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
      agregarRecorridosFaltantes(nBuses);

/*
Estas funciones se encargan de permitir el desplazamiento horizontal en la linea de tiempo
*/
var timeline1= $('.timeline'),
   timelineWidth=setTimelineWidth(disEE,timeline1,nEstaciones);
   timeline1.addClass('loaded');
//parte de este codigo es extraido de la pagina https://codyhouse.co/gem/horizontal-timeline/
 //detect click on the next arrow
timeline1.find('.mover').on('click', '.next', function(event){
  event.preventDefault();
  updateSlide(timeline1, timelineWidth, 'next');
  timeline0=$('.timeline0');
  for (var i = 0; i < timeline0.length; i++) {
      updateSlide(timeline0.eq(i), timelineWidth, 'next');

  }
});
 //detect click on the prev arrow
timeline1.find('.mover').on('click', '.prev', function(event){
  event.preventDefault();
  updateSlide(timeline1, timelineWidth, 'prev');
  for (var i = 0; i < timeline0.length; i++) {
      updateSlide(timeline0.eq(i), timelineWidth, 'prev');
  }

});

/*

*/
//funciones de los botones
$("#btn1").click(function(){
    it.agregarRecorrido("hola todos");
    timeline=$('.timeline0');
});
$("#btn2").click(function(){
    it.eliminarRecorrido(0);
    timeline=$('.timeline0');
});
$("#btn3").click(function(){
    $('.bus').eq(0).css('background-image','url(../img/bus-markerv.svg)');
});
a=0;
$("#btn4").click(function(){
    $('.lineT').eq(a).css('background-color','#FF5252');
    $('.lineT').eq(a).css('width','120px');
    a++;
});
$("#btn5").click(function(){
    $('.lineT').eq(a).css('background-color','#00E676');
    $('.lineT').eq(a).css('width','120px');
    a++;
});
$("#btn6").click(function(){
    $('.lineT').eq(a).css('background-color','#3F51B5');
    $('.lineT').eq(a).css('width','120px');
    a++;
});



//funciopn encarga de mostrar los nombre de las estaciones
  function agregarCabecera(nEstaciones,estaciones){
    var nombreEstaciones=[];
    //creamos las estaciones de la cabecera
    for (var i = 0; i < nEstaciones; i++) {
      nombreEstaciones.push("<div class=estacion>"+paradas[i].nombre+"</div>")
      //lineG.append("<li class=estacion1></li>")
    }
    console.log(nombreEstaciones.join(""));
    var body=$("body");
    body.append("<div class=cajaP><div class=timeline><div class=line><ol style=background-color:transparent class=linei>"+nombreEstaciones.join("")+"</ol></div><ul class=mover><li><a href=#0 class=prev class=inactive>Anterior</a></li><li><a href=#0 class=next>Siguiente</a></li></ul></div><div class=caja></div></div>");
    $(".prev").addClass("inactive");
    var line=$(".estacion");
      for (var i = 0; i < nEstaciones; i++) {
            setPosTimelineE(i,disEE,line.eq(i));
          }

  }
  //se encarga de agregar los siguientes recorridos faltantes
  function agregarRecorridosFaltantes(nBuses){
    var estBus=$('#recorrido').html(),
        recorridos=[];
    //se guarda primero la informacion del DOM en un array debido al costo computacion elevado de la funcion "append" de jQuery
    for (var i = 0; i < nBuses-1; i++) {
      recorridos.push("<div class=timeline0><div class=line>"+estBus+"</div> <div class=datos>hora"+(i+1)+" de salida</div></div>");
    }
    caja.append(recorridos.join(''));
    }
  //se encarga de agregar un recorrido al final, info se refiere a la hora de salida del bus
  this.agregarRecorrido=function(info){
    caja.append("<div class=timeline0><div class=line>"+estBus+"</div> <div class=datos>hora de salida:</br>"+info+"</div></div>");
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
