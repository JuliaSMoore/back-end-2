
const houseDB = require (`./db.json`)
let id = 4

module.exports = {
    getHouses: (req, res) => {
        res.send(houseDB)
    },

    deleteHouse: (req, res) => {
        id = +req.params.id
        let index
        for(let i = 0; i < houseDB.length; i++) {
            if (houseDB[i].id === id) {
                index = i
            }
        }
        if (index !== undefined) {
            houseDB.splice(index, 1)
            res.status(200).send(houseDB)
        } else {
            res.status(400).send(`Id is not found`)
        }
    },
    createHouse: (req, res) => {
        let obj = req.body
        let newHouse = {
            id: id,
            address: obj.address,
            price: +obj.price,
            imageURL: obj.imageURL,
        }
        id++

        houseDB.push(newHouse)
        res.send(houseDB)
    },
    updateHouse: (req, res) => {
        id = +req.params.id
        let {type} = req.body
        let index

        for (let i = 0; i < houseDB.length; i++) {
            if (houseDB[i].id === id) {
                index = i
            }
        }

        if (index !== undefined && type === `plus` ) {
            houseDB[index].price = houseDB[index].price + 10000
            res.send(houseDB)
        } else if (index !== undefined && type === `minus`) {
            houseDB[index].price = houseDB[index].price - 10000
            res.send(houseDB)
        } else {
            res.status(400).send(`client error`)
        }
    },
}