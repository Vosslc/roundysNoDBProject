// const beersCtrl
// let id = 1;
let id = 2;
let beer = [];
// let beer = [{
//   id:0,
//   brewery:"Uinta",
//   name:"Hop Nosh",
//   style:"IPA",
//   abv: "7.2",
//   list: "beerWishList"
// },
// {
//   id:1,
//   brewery:"Uinta",
//   name:"Baba",
//   style:"Black Lager",
//   abv: "4",
//   list: "beerConsumedList"
// }
// ]





module.exports = {
create: (req, res, next) => {
  const { brewery, name, style, abv } = req.body;
  beer.push({ id, brewery, name, style, abv, list: "beerWishList" });
  id++;
  // console.log(brewery)
  // console.log(req.body)
  res.status(200).send(beer)
},

read: (req, res, next) => {
  
  res.status(200).send(beer)
},

update: (req, res, next) => {
  const {list} = req.body // the body comes from Beer.js line 17 col73 button
  const id = req.params.id
  const beerIndex = beer.findIndex(beer => beer.id == id)
  let beer1 = beer[beerIndex];
  console.log(beer1)
  beer[beerIndex] = {
    id: beer1.id,
    brewery: beer1.brewery,
    name: beer1.name,
    style: beer1.style,
    abv: beer1.abv,
    list: list || beer1.list, // this is a fail safe, the current value of list: comes from Beer.js the || beer1.list is the failsave that will keep the list: value at beerWishList
  };
  res.status(200).send(beer)
},

delete: (req, res, next) => {
  
  res.status(200).send(beer)
},

}