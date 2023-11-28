import Pelicula from "./classPelicula.js";

//variables
const formularioAdminPelis = document.querySelector('#formularioAdministrarPelicula');

//funciones
const crearPelicula = () =>{
    //tomar toda la info del formulario
  const codigo = document.getElementById('codigo').value
  const titulo = document.getElementById('titulo').value
  const descripcion = document.getElementById('descripcion').value
  const imagen = document.getElementById('imagen').value
  const genero = document.getElementById('genero').value

  if (!codigo || !titulo || !descripcion || !imagen || !genero) {
    alert('Complete todos los campos del formulario');
    return;
  }

    
    //crear el objeto
    const peliNueva = new Pelicula(codigo, titulo,descripcion, imagen, genero);
    //guardar lista de peliculas en localstorage
    let listaPeliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
    listaPeliculas.push(peliNueva);
    localStorage.setItem('peliculas', JSON.stringify(listaPeliculas));
    document.getElementById('codigo').value = '';
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('imagen').value = '';
    document.getElementById('genero').value = '';
}


//resto de la logica
formularioAdminPelis.addEventListener('submit', crearPelicula)