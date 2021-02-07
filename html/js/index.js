console.log("Hola Mundo");

//Creando una variable
let miPrimeraVariable = "Esta es mi primera variable en JS";
//console.log(miPrimeraVariable);

//Re asignando una Variable
miPrimeraVariable = "Esto ha cambiando."
//console.log(miPrimeraVariable);

//Booleanos
let miBool = true;
let miOtroBool = false;
//console.log(miBool,miOtroBool);

//numeros
let miNumero = 5;
let minumero2 = 10;
//console.log(miNumero,minumero2);

//null y undefined

let undef;
let nulo = null;
//console.log(undef,nulo);

//Objeto vacio
const MiObjeto = {}

const miOtroObj = {
  miNumero:12,
  miString:"Una Cadena",
  miBool:true,
}

//imprimir todas las propiedades del objeto
//console.log(miOtroObj);

//Imprimir una propiedad del Objeto
//console.log(miOtroObj.miBool);


//Arreglos en JS

const arrVacio = [];
const arr = [1,2,"Hola","Mundo", miOtroObj]
//console.log(arr);


//Metodo push para agregar elementos al Arreglos
arrVacio.push(5)
arrVacio.push("Panama")
arrVacio.push("Libertad")

//console.log(arrVacio)

//Control de flujo
//if / else

const edad = 10;
if(edad > 5 && edad < 18){
  console.log("El niño puede jugar.")
}

else{
  console.log("El niño no puede jugar.")
}

//While Loop

/*x = 1;
   while(x < 6){
  console.log(x);
  x++;
}*/

//Ciclo for
/*for(let i = 0; i < 0; i++){
   console.log(i)
} */

//Recorrer un arreglo con el ciclo for
/*let arreglo = [1,2,3,"hola",4 ,5 ,"mundo"];
for(let i = 0; i < arreglo.length ;i++){
  console.log(arreglo[i]);
} */


//Funciones en js
function iterar(arg1){
  for(let i = 0; i < arg1.length; i++){
      console.log(arg1[i]);
  }
}

const numeros = [1,2,3,"hola",4 ,5];
const nombres =["Omar", "Cepillin", "Ambar", "Mostrilin", "Berta" , "Milton"];

iterar(numeros);
iterar(nombres);


// funcion anonima
function sumar(a , b,cb){
  r = a + b;
  cb(r)
}


sumar(2,3, function(r){
  console.log(r);
});
