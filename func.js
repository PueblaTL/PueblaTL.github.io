//Generador de datos de personas aleatorias:
//declaración de variables
const boton = document.querySelector('#boton');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const foto = document.querySelector('#foto');
const edad = document.querySelector('#edad');
const direccion = document.querySelector('#direccion');
const ndireccion = document.querySelector('#ndireccion');
const cp = document.querySelector('#cp');
const ciudad = document.querySelector('#ciudad');
const pais = document.querySelector('#pais');
const celular = document.querySelector('#celular');


const generarUsuario = async () => {
    //consultar a la API
    const url = 'https://randomuser.me/api/?nat=es,mx,us';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.large;
    nombre.textContent = datos.name.first;
    apellido.textContent = datos.name.last;
    correo.textContent = datos.email;
    telefono.textContent = datos.phone;
    edad.textContent = datos.dob.age;
    direccion.textContent = datos.location.street.name;
    ndireccion.textContent = datos.location.street.number;
    cp.textContent = datos.location.postcode;
    ciudad.textContent = datos.location.city;
    pais.textContent = datos.location.country;
    celular.textContent = datos.cell;
}


//crear un evento
document.addEventListener('DOMContentLoaded', generarUsuario);
boton.addEventListener('click', generarUsuario);
