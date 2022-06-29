let Cliente = require("./Cliente")
let Menu = require("./Menu")
let Productos = require("./Productos")
let Restaurante = require("./Restaurante")

let menu_cliente = new Menu
let cliente_1 = new Cliente("Estebarquito25",3135321088,"carrera 103 #22-03","alexcs252002@gmail.com",[2002,25,1])

console.log(cliente_1.get_info())

console.log(cliente_1.edad_cliente())

let p1 = new Productos("Chuleta con arroz y frijoles")
let p2 = new Productos("pollo a la planchar con arroz y ensalada")
let p3 = new Productos("pernil de cerdo con arroz y papas fritas")
let p4 = new Productos("carne asada con arroz y espagueti")

let num_productos = parseInt(prompt('\nCuantos productos va a añadir'))

console.log(`\nMenu:\n  1. Chuleta con arroz y frijoles\n  2. pollo a la planchar con arroz y ensalada\n  3. pernil de cerdo con arroz y papas fritas\n  4. carne asada con arroz y espagueti\n`)

let num = 0

for(let i = 0; i < num_productos; i++){
  num = parseInt(prompt(`Producto #${i+1} : `))
  menu_cliente.agregar_producto(eval('p'+num))
}

console.log(menu_cliente.get_info())


