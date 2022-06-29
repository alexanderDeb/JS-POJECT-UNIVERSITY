let Productos = require("./Productos")

module.exports = class Menu{
  productos = [] 


  agregar_producto(p){
    this.productos.push(p)
  } 

  get_info(){
    let info = `\n    nombre producto #1: ${this.productos[0].nombre}`
    for (let i = 1; i < this.productos.length; i++) {
      info = info + (`\n    nombre producto #${i+1}: ${this.productos[i].nombre}`)
    }
  return info
  }
}

