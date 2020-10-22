var apuesta = require("./Apuesta.js"),
assert= require("assert");

var nueva_apuesta = new apuesta.Apuesta('Polopos','Alhama','2-3');
assert(nueva_apuesta, "Creada apuesta");
assert.equal(nueva_apuesta.as_string(), "Polopos: Alhama - 2-3","Creado");
assert.notEqual(nueva_apuesta.ver_local(), nueva_apuesta.ver_visitante(), "Partido correcto");
assert.equal(nueva_apuesta.ver_resultado(), "2-3", "Resultado correcto");
console.log("Si has llegado aquí, han pasado todos los tests");
