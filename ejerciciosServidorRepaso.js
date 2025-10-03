//Ejercicio 1: Servidor Basico
//Ejercicio 2: Respuesta JSON

const express = require('express')
const app = express()
const port = 4000


app.use(express.json())
//Ejercicio 8: Middleware Personalizado
app.use((req, res, next) => {
    const data = new Date();
  console.log(req.method, data, req.originalUrl)
  next()
})

app.get('/bienvenida', (req, res, next) => {
    res.send('Bienvenido a mi API')
    next()
})

//Ejercicio 3: Parametros de URL

app.get('/saludar/:nombre', (req, res) => {
    const name = req.params.nombre
  res.send(`Hola, ${name}!`)
})


//Ejercicio 4: POST con Body

 app.post("/registro", (req, res) => {
     const { nombre, email } = req.body;
     res.json({
   "mensaje": "Usuario registrado correctamente",
   "nombre": `${nombre}`,
   "email": `${email}`
 });
 });

//Ejercicio 5: CRUD Completo - Productos

let dataProductos = [
    {
        id: "1",
        nombre: "Televisor",
        precio: 1122,
        pais: "Estados Unidos"
    },
    {
        id: "2",
        nombre: "Telefono",
        precio: 1890,
        pais: "China"
    },
    {
        id: "3",
        nombre: "Micronda",
        precio: 5580,
        pais: "South Corea"
    },
        {
        id: "4",
        nombre: "Nevera",
        precio: 10450,
        pais: "Laos"
    }
]

let dataUsuarios = [
    {
        name: "Charly",
        lastname: "Baring",
        password: "jfjfjf"
    },
        {
        name: "Mikky",
        lastname: "Closets",
        password: "gfhgfgf"
    },
            {
        name: "Logan",
        lastname: "Reno",
        password: "hdjgfdhf"
    },
]
// Devuelve un array de productos (puedes usar datos de ejemplo en memoria)
app.get("/productos", (req, res) => {
    res.json(dataProductos)
})
//Crea un nuevo producto (recibe nombre y precio en el body)
app.post("/productos", (req, res) => {
    const dataNew = req.body;
    dataProductos.push(dataNew);
    res.json({
        "mensaje": "Producto registrado correctamente",
        dataProductos
    })
}
)
//Actualiza un producto existente
app.put("/productos/:id", (req, res) => {
    const id = req.params.id;

    const updates = req.body

    let index = dataProductos.findIndex((producto) => {
        return String(producto.id) === String(id);
    })
    dataProductos[index] = {...dataProductos[index], ...updates}

    res.json({
        "message": `the product was updated`,
        "producto": dataProductos
     });
})

// Elimina un producto por su ID

app.delete("/productos/:id", (req, res) => {
    const id = req.params.id;

    let index = dataProductos.findIndex((producto) => {
        return String(producto.id) === String(id);
    })

    delete dataProductos[index]

    dataProductos = dataProductos.filter(item => item !== null)

    res.json({
        "message": `the product was deleted`,
        "producto": dataProductos
     });
}
)

//Ejercicio 6: Multiples Parametros
app.get("/calculadora/:operacion/:num1/:num2", (req, res) => {
    const { operacion, num1, num2 } = req.params
    number1 = Number(num1)
    number2 = Number(num2)
    console.log(operacion, num1, num2)
    let result;
    switch (operacion) {
    case "suma":
            result = number1+number2
            break;
    case "resta":
            result = number1-number2
            break;
    case "multiplicacion":
            result = number1*number2
            break;
    case "division":
            result = number1/number2
            break;
    
        default:
            result = 0;
            break;
    }
    res.json({
        "message": `The result was calculated`,
        "operacion" : operacion,
        "result": result
     });
})

//Ejercicio 7: Query Parameters

app.get('/buscar', (req, res) => {
   const { categoria, precio_max } = req.query
    console.log(categoria, precio_max)
        res.json({
            "result": categoria,
            "result": precio_max
     });
})

//Ejercicio 9: Cliente con Fetch GET

app.get('/usuarios', (req, res) => {

    console.log("usuarios")
        res.json({
            "result": dataUsuarios,
     });
})

//Ejercicio 10: Cliente con Fetch POST

app.post("/login", (req, res) => {
    const dataNew = req.body.user;
    console.log(req.body)
    dataUsuarios.push(dataNew);
    res.json({
        "mensaje": "User registrado correctamente",
        dataUsuarios
    })
}
)
//Bonus: Proyecto Integrador



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})