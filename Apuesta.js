exports.Apuesta = function(local, visitante, resultado){
	this.local = local;
	this.visitante = visitante;
	this.resultado = resultado;

	this.as_string = as_string;
	this.ver_local = ver_local;
	this.ver_visitante = ver_visitante;
	this.ver_resultado = ver_resultado;
}

function as_string(){
	return this.local + ": " + this.visitante + " - " + this.resultado;
}

function ver_local(){
	return this.local;
}

function ver_visitante(){
	return this.visitante;
}

function ver_resultado(){
	return this.resultado;
}
