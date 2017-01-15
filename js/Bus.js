/*
Author: Antonio Cortes
esta clase se usa para administrar los recorridos, cuando solo se cuenta con una ruta
*/
function Bus(idRecorrido, horaSaliReal,horaSaliDete, id, caja,timelineWidth,estBus) {
	
	agregarBusCaja(idRecorrido, horaSaliReal,horaSaliDete, id, caja);
	this.idRecorrido = idRecorrido;

var estadoAvance = false, //alamcena el modulo anterior encargado de definir un cambio entre estaciones
	modAnteEsta = 0, //defino un etado que me permita saber cuando se podra dibujar la linea de estado entre estaciones 
	horaIni = 0; //esta hora me permitira almacenar la hora a la que el bus abandona a estacion, con esta hora podre determinar el tiempo que duro entre las dos estaciones

	function agregarBusCaja (idRecorrido, horaSaliReal,horaSaliDete, id, caja) {
		caja.append("<div class=timeline0  id=recorrido"+idRecorrido+"><div class=line><ol class=linei style=width:"+timelineWidth+"px;>"+estBus+"<li class=bus><div class=bust>"+id+"</div></li></div> <div class=datos>hora de salida:</br>"+horaSaliReal.toLocaleTimeString()+"</div><div class=cerrar onclick=it.removeRecorrido("+idRecorrido+")>x</div></div>");
		$('.tooltipped').tooltip({delay: 50});
	}
	//metodos get (obtencion)
	this.getEstadoAvance = function () {
    return estadoAvance;
	}
	this.getModAnteEsta = function () {
	return modAnteEsta;
	}
	this.getHoraIni = function () {
	return horaIni;
	}
	//metodos set (modificacion)
	this.setEstadoAvance = function (estadoAvanceS) {
    estadoAvance = estadoAvanceS;
	}
	this.setModAnteEsta = function (modAnteEstaS) {
	modAnteEsta = modAnteEstaS;
	}
	this.setHoraIni = function (horaIniS) {
	horaIni = horaIniS;
	}


}