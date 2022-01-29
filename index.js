let desarrolloSD = ["Inglés Técnico 1","Arquitectura De Las Computadoras","Programación 1","Sistemas Y Organizaciones","Matemática 1",
"Inglés Técnico 2","Sistemas Operativos 1","Programación 2","Matemática 2","Análisis De Sistemas 1",
"Sistemas Operativos 2","Análisis De Sistemas 2","Programación Móvil","Bases De Datos 1","Aplicaciones Web",
"Redes De Información 1","Bases De Datos 2","Estructuras De Datos","Laboratorio De Programación 1","Práctica Profesionalizante 1",
"Redes De Información 2","Matemática Aplicada 1","Laboratorio De Programación 2","Práctica Profesionalizante 2","Deontología Profesional 1","Validación Y Verificación De Software",
"Matemática Aplicada 2","Laboratorio De Programación 3","Práctica Profesionalizante 3","Deontología Profesional 2","Seguridad Y Protección De La Información","Ingeniería De Software"]

let analistaSD = ["Inglés Técnico 1","Arquitectura De Las Computadoras","Programación 1","Sistemas Y Organizaciones","Matemática 1",
"Inglés Técnico 2","Sistemas Operativos 1","Programación 2","Matemática 2","Análisis De Sistemas 1",
"Sistemas Operativos 2","Análisis De Sistemas 2","Programación Móvil","Bases De Datos 1","Aplicaciones Web",
"Redes De Información 1","Bases De Datos 2","Estructuras De Datos","Laboratorio De Programación 1","Práctica Profesionalizante 1",
"Redes De Información 2","Matemática Aplicada 1","Laboratorio De Programación 2","Práctica Profesionalizante 2","Deontología Profesional 1","Validación Y Verificación De Software",
"Matemática Aplicada 2","Laboratorio De Programación 3","Práctica Profesionalizante 3","Deontología Profesional 2","Seguridad Y Protección De La Información","Ingeniería De Software"]

let matDif = []
let matSame = []


analistaSD.forEach(elem=>{
	if(desarrolloSD.indexOf(elem)!=-1){
		matSame.push(elem)
	}else{
		matDif.push(elem)
	}
	
})

console.log(matDif)

console.log("son iguales",matSame)

let uai = ["PROGRAMACIÓN ESTRUCTURADA",
"SISTEMAS DE COMPUTACIÓN I",
"LABORATORIO DE CÁLCULO",
"INGLÉS I",
"SISTEMAS DE COMPUTACIÓN II",
"CÁLCULO INFINITESIMAL",
"INGLÉS II",
"PROGRAMACIÓN I",
"PROGRAMACIÓN ORIENTADA A OBJETOS",
"METODOLOGÍA DE DESARROLLO DE SISTEMAS I",
"ARQUITECTURA DE SISTEMAS OPERATIVOS",
"PROBLEMÁTICA DEL MUNDO ACTUAL",
"TECNOLOGÍA DE LAS COMUNICACIONES",
"LENGUAJES DE ÚLTIMA GENERACIÓN",
"METODOLOGÍA DE DESARROLLO DE SISTEMAS II",
"BASE DE DATOS",
"PROBABILIDAD Y ESTADÍSTICA",
"PROGRAMACIÓN II",
"TELEINFORMÁTICA Y COMUNICACIONES",
"TRABAJO FINAL"]

console.table(analistaSD.sort())

// let x = [analistaSD.sort(),uai.sort()]
console.table(uai.sort())



