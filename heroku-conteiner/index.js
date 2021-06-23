
const express = require('express')

const app = express()

const port = process.env.PORT

app.get('/',(req,res) => res.send('hola mundo'))

app.listen(port,() => console.log(port))
