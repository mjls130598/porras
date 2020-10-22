var assert = require("assert"),
      apuesta = require("./Apuesta.js");

describe('Apuesta', function(){
	describe('Carga', function(){
		it('Debe estar cargada', function(){
			assert(apuesta, "Cargado");
		});
	});
	
	describe('Crea', function(){
		it('Debe crear apuestas correctamente', function(){
			var nueva_apuesta = new apuesta.Apuesta('Polopos','Alhama','2-3');
			assert.equal(nueva_apuesta.as_string(), "Polopos: Alhama - 2-3","Creado");
		});
	});

	describe('Verficar partido', function(){
		it('Debe ser dos equipos distintos', function(){
			var nueva_apuesta = new apuesta.Apuesta('Polopos','Alhama', '2-3');
			assert.notEqual(nueva_apuesta.ver_local(),nueva_apuesta.ver_visitante(), "Partido correcto");
		});
	});
});
