export default class Pelicula {
  constructor(codigo = uuid4(), titulo, descripcion, imagen, genero) {
    this._codigo = codigo;
    this._titulo = titulo;
    this._descripcion = descripcion;
    this._imagen = imagen;
    this._genero = genero;
  }

  get codigo() {
    return this._codigo;
  }

  set codigo(nuevoCodigo) {
    this._codigo = nuevoCodigo;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }

  get descripcion() {
    return this._descripcion;
  }

  set descripcion(nuevaDescripcion) {
    this._descripcion = nuevaDescripcion;
  }

  get imagen() {
    return this._imagen;
  }

  set imagen(nuevaImagen) {
    this._imagen = nuevaImagen;
  }

  get genero() {
    return this._genero;
  }

  set genero(nuevoGenero) {
    this._genero = nuevoGenero;
  }

  toJson(){
    return {
      codigo: this.codigo,
      titulo: this.titulo,
      descripcion: this.descripcion,
      imagen: this.imagen,
      genero: this.genero
    }
  }
}