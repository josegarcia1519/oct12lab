const houses = require('./db.json')
let globalid = 4

module.exports = { //instruction that tell node which bits of code to export from a given file, so other files can access them
  getHouses:(req, res) => res.status(200).send(houses), //req is the object containing information about the http request that raised the event."res" to send back the desired http response
  deleteHouse: (req, res) => {
    //findIndex index of first element that satisfies testing function
    let index = houses.findIndex(elem => elem.id === +req.params.id)  //
    houses.splice(index, 1) //splice changes content of array by removing elements
    res,status(200)send(houses)
  },
createHouse:(req, res)==>{
  let { address, price, imageURL} = req.body
  let newHouse = {
    id:globalid,
    address,
    price,
    imageURL
  }
  houses.push(newHouse)
  res.status(200).send(houses)
  globalid++
};
updateHouse: (req,res => {
  let {id} = req.params
  let (type) = req.body
  let index = houses.findIndex(elem => +elem.id === +id)

  if (houses[index].price <= 10000 && type === 'minus') {
    houses[index].price = 0
    res.status(200).send(houses)
} else if (type === 'plus') {
    houses[index].price += 10000
    res.status(200).send(houses)
} else if (type === 'minus') {
    houses[index].price -= 10000
    res.status(200).send(houses)
} else {
    res.sendStatus(400)
}
}
}