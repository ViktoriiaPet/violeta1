const tarea = {
        id: "1",
        tarea: "Llavar los dientes",
        fecha_final: "20.025.2025",
    }

async function getData(url, tarea = [], method) {

    if (method === "GET") {
        const data = await fetch(url)
        const resJSON = await data.json();
        console.log(resJSON)

    return resJSON
    }
    else if (
        method === "POST"
    ) {
        await fetch(url, {
        method: "POST",
        headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(tarea),
    })
    .then(res => res.json())
    .then(msg => console.log(msg))
    }
    else if (
        method === "PUT"
    ) {
        await fetch(url, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(tarea),
    })
    .then(res => res.json())
    .then(msg => console.log(msg))
    }
    else if (
        method === "DELETE"
    ) {
        await fetch(url, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
    },
        })
    .then(res => res.json())
    .then(msg => console.log(msg))
    }
}

getData("http://localhost:2000/tareaCambiar/4", tarea, "PUT")