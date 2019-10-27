// const beersCtrl
// let id = 1;
let id = 0;
const beer = [{
  id:0,
  brewery:"Uinta",
  name:"Hop Nosh",
  style:"IPA",
  abv: "7.2",
  list: "beerWishList"
},
{
  id:1,
  brewery:"Uinta",
  name:"Baba",
  style:"Black Lager",
  abv: "4",
  list: "beerWishList"
}
]



module.exports = {
create: (req, res, next) => {
  const { brewery, name, style, abv } = req.body;
  beer.push({ id, brewery, name, style, abv });
  id++;
  console.log(brewery)
  console.log(req.body)
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