import Pelicula from "./classPelicula.js";

//variables
const formularioAdminPelis = document.querySelector('#formularioAdministrarPelicula');
const btnAgregar = document.querySelector('#btnAgregar')
const modalPelicula = new bootstrap.Modal(document.querySelector('#modalPelicula'))
//guardar lista de peliculas en localstorage
let listaPeliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
  const codigo = document.getElementById('codigo').value
  const titulo = document.getElementById('titulo').value
  const descripcion = document.getElementById('descripcion').value
  const imagen = document.getElementById('imagen').value
  const genero = document.getElementById('genero').value
//funciones



const crearPelicula = (e) =>{
  e.preventDefault()
    //tomar toda la info del formulario

  

    
    //crear el objeto
    const peliNueva = new Pelicula(undefined, titulo,descripcion, imagen, genero);
    
    listaPeliculas.push(peliNueva);
    console.log(peliNueva)
    localStorage.setItem('peliculas', JSON.stringify(listaPeliculas));
    document.getElementById('codigo').value = '';
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('imagen').value = '';
    document.getElementById('genero').value = '';
    crearFila(peliNueva, listaPeliculas.length)
}

const abrirModal = () => {
modalPelicula.show()
}

const cargaInicial = () => {
  if(listaPeliculas.length > 0){
    listaPeliculas.map((e,index) => {
      crearFila(e,index)
    })
  }else{
    console.log('No hay pelis para mostrar')
  }
}

const crearFila  = (pelicula, fila) => {
    const tablaPelicula = document.querySelector('tbody')
    tablaPelicula.innerHTML +=  `<tr>
    <th scope="row">${fila + 1}</th>
    <td>${pelicula._titulo}</td>
    <td>
    ${pelicula._descripcion}
    </td>
    <td>${pelicula._imagen}</td>
    <td>${pelicula._genero}</td>
    <td><button class="btn btn-warning">Editar</button><button class="btn btn-danger">Borrar</button></td>
  </tr>`
}

const verificar = (titulo,descripcion, imagen, genero) => {
  if (!titulo || !descripcion || !imagen || !genero) {
    alert('Complete todos los campos del formulario');
    return;
  } 
  if (titulo.length < 3 || titulo.length > 20) {
    alert('El título debe tener entre 3 y 20 caracteres.');
    return;
  }

  if (descripcion.length < 3 || descripcion.length > 200) {
    alert('La descripción debe tener entre 3 y 200 caracteres.');
    return;
  }

  if (imagen.length < 3 || imagen.length > 200) {
    alert('La URL de la imagen debe tener entre 3 y 200 caracteres.');
    return;
  }
}

//resto de la logica
btnAgregar.addEventListener('click', abrirModal)
formularioAdminPelis.addEventListener('submit', crearPelicula)

cargaInicial()