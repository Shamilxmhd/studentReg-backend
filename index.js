require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require ('./Routes/routes')
// path
const path = require ('path')
const afServer = express()
require('./DB/connection')

afServer.use(cors())
afServer.use(express.json())
afServer.use(router)



afServer.use(express.static(path.join(__dirname, 'client/build')));

afServer.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
  


const PORT = 3000 || process.env.PORT
afServer.listen(PORT, () => {
    console.log(`Application Form Started at ${PORT}`);
})

afServer.get('/', (req, res) => {
    res.status(200).send('<h1>APPLICATION FORM STARTED</h1>')
})