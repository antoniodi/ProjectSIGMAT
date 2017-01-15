
function vModalMulti(rut,rutasActivas) {

var rutas = rut,
	rutasAct = rutasActivas, 
	opcionesRutas = undefined,
    cajamm = undefined,
    cajam1s = $(".cajam1s"),
    multipleM = $(".multipleM"),
    unica = $(".unica");

     this.setRutasActivas = function(rutasActivas){
     	multipleM.children().remove();
        rutasAct = rutasActivas;
    }
    this.getRutasActivas = function(rutasActivas){
        return rutasAct;
    }

    //funcion que devuelve los elementos de un vector sin repetir
    Array.prototype.unique = function(a){
      return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
    });

      agregarRutas(rutas);

    //funcion encargada de procesar las categorias, devolver y graficar
    function agregarRutas(rut) {
      rutas = rut;
      individualizarCategorias();
      var opcionesSelect = [];
      agregarCategoriaModal(opcionesRutas);
      

        
        generarOpciones(rutas);
        $('select').material_select();

		
    	}

		//funcion que recive las rutas, buca el vector categoria de cada ruta, los concatena y obtine las categorias
		//sin repetir y retorna un vector con las categorias sin repetir
		function individualizarCategorias() {
		  opcionesRutas = ["Todas las rutas"];
		    for (var i = 0; i < rutas.length; i++) {
		     opcionesRutas = opcionesRutas.concat(rutas[i].categoria);
		  }
		  
		  opcionesRutas = opcionesRutas.unique();
		  

		}

		//funcion que agrega los criterios de clasificacion a las ventanas modales
   function agregarCategoriaModal() {
     opcionesSelectm = [];

	  for (var i = 0; i < opcionesRutas.length; i++) {

	    opcionesSelectm.push("<div class=cajarm> "+opcionesRutas[i]+"</div>");
	    
	  }
	 
	  cajam1s.append(opcionesSelectm.join(" "));
	  cajamm = cajam1s.find(".cajarm");
	}

	//llenado para seleccion de multiples rutas
    cajam1s.on('click','div',function () {
     t =  $(this);
    
    t.addClass('active').siblings().removeClass('active');


     generarOpcionesM(buscarCoincidencias(opcionesRutas[t.index()]));

	})

   	//genera las opciones para multiples rutas en la ventana modal
   	function generarOpcionesM(rutasSeleccionadas) {
    cuadroRutas = [];
    tamñodifCon = 0; 
    for (var i = 0; i < rutasSeleccionadas.length; i++) {   	
    		
    	//calculamos el tamaño del vector resultado de la diferencia de conjuntosde rutas
    	if ( ($([rutasSeleccionadas[i].nombre]).not(rutasAct)).length > 0 ) {
				cuadroRutas.push("<p><input type=checkbox name=rutas value="+rutasSeleccionadas[i].nombre+" id="+rutasSeleccionadas[i].nombre+" /><label for="+rutasSeleccionadas[i].nombre+">"+rutasSeleccionadas[i].nombre+"</label></p>");
				};
    
  	}
	  multipleM.children().remove();
	  if (cuadroRutas.length ==0) {
	  	multipleM.append("<h5>Las rutas de la categoria seleccionada ya se estan monitorizando</h5>");
	  } else{
	  	multipleM.append(cuadroRutas.join(" "));
	  };
	  
	}

	//genera las opciones para una unica ruta en la ventana modal
	function generarOpciones(rutasSeleccionadas) {
	  cuadroRutas = [];
	  for (var i = 0; i < rutasSeleccionadas.length; i++) {
	    cuadroRutas.push("<div class=caja3> <div class=logo style=background:#"+rutasSeleccionadas[i].color+";>"+rutasSeleccionadas[i].nombre+"</div>  <div class=texto>"+rutasSeleccionadas[i].descripcion+"</div><div class=switch><label><input type=checkbox value="+rutasSeleccionadas[i].nombre+"><span class=lever></span></label></div></div>");
	  }
	  $(".bloque4").children().remove();
	  $(".bloque4").append(cuadroRutas.join(" "));
	  
	};
	//funcion que busca coincidencias en una categoria a partir de una palabra
	function buscarCoincidencias(palabra) {
	  elegidos=[];
	  if (palabra == "Todas las rutas") {
	    elegidos = rutas;
	  }else {
	    for (var i = 0; i < rutas.length; i++) {
	      if (rutas[i].categoria.indexOf(palabra) !== -1) {
	          elegidos.push(rutas[i]);
	      }
	    }
	  }
	  return elegidos;
	};

	


}





    
