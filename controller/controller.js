// const beersCtrl
// let id = 1;
const beer = require('../server/beerList.json')



module.exports = {
create: (req, res, next) => {

  res.status(200).send(beer)
},

read: (req, res, next) => {
  
  res.status(200).send(beer)
},

update: (req, res, next) => {
  
  res.status(200).send(beer)
},

delete: (req, res, next) => {
  
  res.status(200).send(beer)
},

}