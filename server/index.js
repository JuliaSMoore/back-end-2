let express = require(`express`);
let cors = require(`cors`);

let app = express();

app.use(cors());
app.use(express.json());

const {
  getHouses,
  deleteHouse,
  createHouse,
  updateHouse,
} = require(`./controller.js`);

app.get(`/api/houses`, getHouses);
app.post(`/api/houses/`, createHouse);
app.put(`/api/houses/:id`, updateHouse);
app.delete(`/api/houses/:id`, deleteHouse);

app.listen(4004, console.log(`Running on 4004`));
