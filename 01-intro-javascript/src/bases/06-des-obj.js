//Desestructuracion
//Asignacion desestructurante

const persona = {
    nombre: 'Luis',
    edad: 40,
    clave: 'Ironman',
};

const { nombre, edad, clave } = persona;

// console.log(nombre, edad);

//desestructuracion en el argumento
const otraF = ({ clave, nombre, edad, rango = 'capitan' }) => {

    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 12.235,
            lng: -14.555
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = otraF(persona);

console.log(nombreClave, anios);
console.log(lat, lng);

