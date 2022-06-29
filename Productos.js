module.exports = class Productos{
  nombre

  constructor(n){
    this.nombre = n
  }

  Get_info(){
    return `NOMBRE: ${this.nombre}`
  }
}
