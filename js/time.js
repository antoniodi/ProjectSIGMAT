

  jQuery(document).ready(function($){
    $.getJSON("http://localhost:8000/data/estacionesR1.json").
      success(function(data) {
      $.rutas = data;


    var disEE=120, //esta variable define la distancia entre estaciones en pixeles
        max=disEE*data.length+disEE,
        nEstaciones=data.length;

        //hacemos este llamado para capturar l número de buses iniciales
        $.getJSON("http://localhost:8000/data/busesR1.json").
             success(function(dataB) {
             $.bus = dataB;
              var nBuses=dataB.length;
                  it =new itinerario(nBuses,data.length,disEE);
    //it.agregarEstaciones(data.length);
});
    //agregando lineas tiempo al body
  //  for (var i = 0; i < 5; i++) {
      //var li = document.createElement("li");
      //li.innerHTML=data[i].Nombre;
      //li.className+='estacion1';
    //  $("body").append("<div class=timeline0><div class=line><ol class=linei></ol> </div> <div class=datos>hora de salida</div></div>");
    //}

    var timeline= $('.timeline'),
        lb=[],
        line=timeline.children('.line'),
        lineG=line.children('.linei');

    $("#btn1").click(function(){
        it.agregarRecorrido("hola todos");
        timeline0=$('.timeline0');
    });
    $("#btn2").click(function(){
        it.eliminarRecorrido(0);
        timeline0=$('.timeline0');
    });
    $("#btn3").click(function(){
        $('.bus').eq(0).css('background-image','url(../img/bus-markerv.svg)');
    });
    a=0;
    $("#btn4").click(function(){
        $('.lineT').eq(a).css('background-color','#FF5252');
        a++;
    });
    $("#btn5").click(function(){
        $('.lineT').eq(a).css('background-color','#00E676');
        a++;
    });
    $("#btn6").click(function(){
        $('.lineT').eq(a).css('background-color','#3F51B5');
        a++;
    });


       for (var i = 0; i < data.length; i++) {
         var li = document.createElement("li");
         li.innerHTML=data[i].Nombre;
         li.className+='estacion';
         lineG[0].appendChild(li);
       }


                  /* for (var i = 0; i < data.length; i++) {
                     var li = document.createElement("li");
                     //li.innerHTML=data[i].Nombre;
                     li.className+='estacion1';
                     lineG0[0].appendChild(li);
                   }
*/

                  var estaciones=lineG.find('li')
                   //var estaciones1=lineG0.find('li')

                   timelineWidth=setTimelineWidth(disEE,timeline,data.length);
                   for (i = 0; i < estaciones.length; i++) {
                     setPosTimelineE(i,disEE,estaciones.eq(i),data[i].distancia,max);
                   }

                  //parte de este codigo es extraido de la pagina https://codyhouse.co/gem/horizontal-timeline/
                   //detect click on the next arrow
             			timeline.find('.mover').on('click', '.next', function(event){
             				event.preventDefault();
             				updateSlide(timeline, timelineWidth, 'next');
                    timeline0=$('.timeline0');
                    for (var i = 0; i < timeline0.length; i++) {
                        updateSlide(timeline0.eq(i), timelineWidth, 'next');

                    }

             			});
                   //detect click on the prev arrow
             			timeline.find('.mover').on('click', '.prev', function(event){
             				event.preventDefault();
             				updateSlide(timeline, timelineWidth, 'prev');
                    for (var i = 0; i < timeline0.length; i++) {
                        updateSlide(timeline0.eq(i), timelineWidth, 'prev');
                    }

             			});

                   timeline.addClass('loaded');
});

                  $.getJSON("http://localhost:8000/data/busesR1.json").
                             success(function(dataB) {
                               $.bus = dataB;
                    /*
                    for (var i = 0; i < lb.length; i++) {
                      var li = document.createElement("li");
                      li.className+='bus';
                      li.style.display='none';
                      lb[i][0].appendChild(li);

                    }*/
                    b=0;
            setInterval(function () {

                         if (b<dataB[0].distancia.length) {
                           //console.log(data[0].Nombre);
                           //recorremos el
                           for (var i = 0; i < dataB.length; i++) {
                             setPosTimelineB($(".bus").eq(i),dataB[i].distancia[b]);
                           }
                       b++;
                     }else {
                       b=0;
                     }
             },1000);
                 });

   })




function setTimelineWidth(disEE,timeline,length) {
  //el ancho esta definido por el numero de estaciones, se estima 120px estre cada estacion, los cuales seran distibuidos
  //de forma uniforme entre las estaciones (en estudio: de acuerdo a la distancia real, genreando una perseccion de la distacia real.)

  totalWidth=(length*disEE+disEE);
  (timeline.children('.line')).children('.linei').css('width', totalWidth+'px');
  return totalWidth;
}




//funcion encargada de calcular a partir de la distacia de la estacion o el bus, la posicion de este en el timeline
//modificamos la posicion de las estaciones en la linea de tiempo y se transladan -50% en x para lograr un centrado relativo
function setPosTimelineE(i,disEE,elemento) {
    /*  var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
        distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;*/
        console.log(i);
        disNormal=Math.round(i*disEE+disEE);
        console.log(disNormal);
        elemento.css('left', disNormal+'px');
        elemento.css('transform','translateX(-50%)');
}
//modificamos la posicion de los buses en la linea de tiempo y se transladan -50% en x para lograr un centrado relativo
function setPosTimelineB(elemento,distancia) {
    /*  var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
        distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;*/
        //disNormal=Math.round(((distancia+120)/max)*(timelineWidth-120));
        dis=Math.round(distancia);
        //console.log(distancia +"left "+dis);
        //console.log("bus"+disNormal);
        elemento.css('left', dis+'px');
        elemento.css('transform','translateX(-50%)');
        elemento.css('transition','left 1s linear');
}


function updateSlide(timeline, timelineTotWidth, string) {
  var line=timeline.children('.line'),
      lineG=line.children('.linei');
  //retrieve translateX value of timelineComponents['eventsWrapper']
  var translateValue = getTranslateValue(lineG),
    wrapperWidth = Number(line.css('width').replace('px', ''));
  //translate the timeline to the left('next')/right('prev')
  (string == 'next')
    ? translateTimeline(timeline, translateValue - wrapperWidth, wrapperWidth - timelineTotWidth)
    : translateTimeline(timeline, translateValue + wrapperWidth);
}

function getTranslateValue(timeline) {
  var timelineStyle = window.getComputedStyle(timeline.get(0), null),
    timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
          timelineStyle.getPropertyValue("-moz-transform") ||
          timelineStyle.getPropertyValue("-ms-transform") ||
          timelineStyle.getPropertyValue("-o-transform") ||
          timelineStyle.getPropertyValue("transform");

      if( timelineTranslate.indexOf('(') >=0 ) {
        var timelineTranslate = timelineTranslate.split('(')[1];
      timelineTranslate = timelineTranslate.split(')')[0];
      timelineTranslate = timelineTranslate.split(',');
      var translateValue = timelineTranslate[4];
      } else {
        var translateValue = 0;
      }

      return Number(translateValue);
}

function translateTimeline(timeline, value, totWidth) {
  var lineG = (timeline.children('.line')).children('.linei').get(0),
      mover=timeline.find('.mover');
      console.log(lineG);
  value = (value > 0) ? 0 : value; //only negative translate value
  value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
  setTransformValue(lineG, 'translateX', value+'px');
  //update navigation arrows visibility
  (value == 0 ) ? mover.find('.prev').addClass('inactive') : mover.find('.prev').removeClass('inactive');
  (value == totWidth ) ? mover.find('.next').addClass('inactive') : mover.find('.next').removeClass('inactive');
}

function setTransformValue(element, property, value) {
  element.style["-webkit-transform"] = property+"("+value+")";
  element.style["-moz-transform"] = property+"("+value+")";
  element.style["-ms-transform"] = property+"("+value+")";
  element.style["-o-transform"] = property+"("+value+")";
  element.style["transform"] = property+"("+value+")";
}
