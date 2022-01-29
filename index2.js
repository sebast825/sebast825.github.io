let asd = document.querySelector('.asd');

let Tablero = class Tablero{
	constructor(){
		this.casillas = 100;		
	}
	crear(){
		 return crearelem()
		
	}
}

function crearelem(){
	let divPadre = document.createElement('div');
	for(let i=0 ; i<100 ; i++){
		let div = document.createElement('div');
		div.innerText = 'asd'
		divPadre.appendChild(div)
	}
	return divPadre
}

document.body.appendChild(Tablero.crear)
