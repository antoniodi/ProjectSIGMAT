$.getJSON("http://localhost:8001/data/rutasd.json").
          success(function(data) {
           $.rutas = data;

      jQuery(document).ready(function($){
                   var timeline= $('.timeline'),
                       lineG=(timeline.children('.line')).children('.linei');


                   for (var i = 0; i < data.length; i++) {
                     var li = document.createElement("li");
                     li.innerHTML=data[i].Nombre;
                     lineG[0].appendChild(li);
                   }


                   var estaciones=lineG.find('li')
                   timelineWidth=setTimelineWidth(timeline,data);

                   var max=maxValue(data);
                     for (i = 0; i < estaciones.length; i++) {

                   setPosTimeline(estaciones.eq(i),data[i].distancia,max,timelineWidth);

                   }


                   //detect click on the next arrow
             			timeline.find('.mover').on('click', '.next', function(event){
             				event.preventDefault();
             				updateSlide(timeline, timelineWidth, 'next');
             			});
                   //detect click on the prev arrow
             			timeline.find('.mover').on('click', '.prev', function(event){
             				event.preventDefault();
             				updateSlide(timeline, timelineWidth, 'prev');
             			});

                   timeline.addClass('loaded');

       $.getJSON("http://localhost:8001/data/bus.json").
                  success(function(data) {
                    $.bus = data;
                    var li = document.createElement("li");
                    li.innerHTML=data[0].Nombre;
                    lineG[0].appendChild(li);
                    b=0;
                   setInterval(function () {

                     if (b<data[0].distancia.length) {
                       //console.log(data[0].Nombre);
                       console.log(data[0].distancia[b]);

                       setPosTimeline(lineG.find('li').eq(-1),data[0].distancia[b],max,timelineWidth);
                   b++;
                 }else {
                   b=0;
                 }

                   }
                     ,200);



                 });

   })
 });




function setTimelineWidth(timeline,data) {
  //el ancho esta definido por el numero de estaciones, se estima 100px estre cada estacion, los cuales seran distibuidos
  //de forma uniforme entre las estaciones de acuerdo a la distancia real, genreando una perseccion de la distacia real.

  totalWidth=(data.length*150+100);
  (timeline.children('.line')).children('.linei').css('width', totalWidth+'px');
  return totalWidth;
}
function maxValue(data) {
  var max=0;
      for (var i = 0; i < data.length; i++) {
        if (max<data[i].distancia) {
          max=data[i].distancia;}
        }
        return max;
}




//funcion encargada de calcular a partir de la distacia de la estacion o el bus, la posicion de este en el timeline
function setPosTimeline(elemento,distancia,max,timelineWidth) {


    /*  var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
        distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;*/
        disNormal=Math.round((distancia/max)*(timelineWidth-100));
        console.log(disNormal);
        elemento.css('left', disNormal+'px');

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
