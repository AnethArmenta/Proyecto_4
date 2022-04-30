//usando objeto express
const express = require('express')
// App de express
const app = express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//path inicial, respondera a la url localhost: 3000
app.get('/?', (req,res)=>{
    res.send('Hello world!')
})

//respondiendo texto
//localhost:3000/launchx
app.get('/launchx', (req, res)=> {
    res.send("Bienvenidos a launchx")
})

//Regresando un objeto
//localhost:3000/explorersInNode
app.get("/explorersInNode", (req,res)=>{
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

//Query params: Recibir parametros por la url
//https://localhost:3000/explorers/aneth
//req.params = {"explorerName" : "aneth"}
app.get('/explorers/:explorerName', (req, res)=>{
    res.send(req.params)
})
// con esto inicializamos esta app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})