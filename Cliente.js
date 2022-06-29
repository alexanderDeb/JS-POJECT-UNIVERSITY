module.exports = class Cliente {
  nombre
  telefono 
  direccion
  correo
  agno_nacimiento

  constructor(n,t,d,c,ag){
    this.nombre = n
    this.telefono = t
    this.direccion = d
    this.correo = c
    this.agno_nacimiento = ag
  }

  
  edad_cliente(){
    let fechaActual = [2022,6,4]
    let fechaCumple = this.agno_nacimiento
  
    let año = (fechaActual[0] - this.agno_nacimiento[0] )*365
    let mes = (fechaActual[1] - this.agno_nacimiento[1] )*30
    let dia = (fechaActual[2] - this.agno_nacimiento[2] )
  
    let totalDias = (año + dia + mes)/365
    return `  El cliente tiene ${Math.round(totalDias)} años`
  }  

  get_info(){
    return `  Nombre: ${this.nombre}\n\n  Telefono: ${this.telefono}\n\n  Correo: ${this.correo}\n\n  Fecha de nacimiento: ${this.agno_nacimiento}\n`
  }
}
