const express = require('express')
const api = express()
const port = 2000

let tareas = [
    {
         id: "1",
        tarea: "cerrar la puerta",
        fecha_final: "30.02.2025",
    },
    {
        id: "2",
        tarea: "estudiar la lengua",
        fecha_final: "28.05.2025",
    },
    {
        id: "3",
        tarea: "hacer deporte",
        fecha_final: "26.10.2025",
    },
    {
        id: "4",
        tarea: "cambar la vida",
        fecha_final: "15.05.2025",
    },
    {
        id: "5",
        tarea: "dormir mucho",
        fecha_final: "25.09.2025",
    },
]

api.use(express.json())
api.use((req, res, next) => {
  const data = new Date();
  console.log(req.method, data, req.originalUrl)
  next()
})
//This function return base of users
api.get('/bienvenida', (req, res) => {

    if (!tareas) {
        res.status(404)
        res.render('error', { error: err })
    }
    res.json({
        "message": "datos recibidos",
        tareas
    })
})

//This function can take the data from request ang put them at the base
api.post("/registro", (req, res) => {
    const tarea = req.body;
    console.log(req.body)
    tareas.push(tarea);
        if (!tareas) {
        res.status(404)
        res.render('error', { error: err })
    }
        if (!tarea) {
        res.status(400)
        res.render('error', { error: err })
    }
     res.json({
   "mensaje": "Tarea registrada correctamente",
   "user": tareas,
 });
});

//this function can make update data from th request sourse
api.put("/tareaCambiar/:id", (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    const updates = req.body

        if (!tareas) {
        res.status(404)
        res.render('error', { error: err })
    }
        if (!req.body) {
        res.status(400)
        res.render('error', { error: err })
    }

    let index = tareas.findIndex((producto) => {
        return String(producto.id) === String(id);
    })
    tareas[index] = {...tareas[index], ...updates}

    res.json({
        "message": `Tarea was updated`,
        "users": tareas
     });
})

//This function can delet one of user with id nimber in the URL link
api.delete("/tareaDelete/:id", (req, res) => {
    const id = req.params.id;

    let index = tareas.findIndex((producto) => {
        return String(producto.id) === String(id);
    })

        if (!tareas) {
        res.status(404)
        res.render('error', { error: err })
    }

    delete tareas[index]

    tareas = tareas.filter(item => item !== null)

    res.json({
        "message": `tarea was deleted`,
        "users": tareas
     });
}
)


api.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})