require('dotenv').config()
// const beer = require('./beerList.json')
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('../controller/controller')
const app = express()


// TOP LEVEL MIDDLEWARE:
app.use(express.json())

// ENDPOINTS:
const beerUrl = "/api/beer"
app.post( beerUrl, ctrl.create )
app.get( beerUrl, ctrl.read );

//CODE bellow is without a controller
// app.get( beerUrl, (req, res, next) => { 
//   res.status(200).send(beer)
// });
app.put( `${beerUrl}/:id`, ctrl.update )
app.delete( `${beerUrl}/:id`, ctrl.delete )


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} beers on the wall.`))

