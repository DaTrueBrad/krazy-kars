const express = require("express");
const session = require("express-session");
const ViteExpress = require("vite-express");
require("dotenv").config();
const { SECRET } = process.env;
const db = require('./db')
const User = require('./models/user')
const Kar = require('./models/kars');
const {login, register} = require('./controllers/authController')
const seed = require('./seed');
const { getAllKars, createKar } = require("./controllers/karController");

const app = express();
app.use(express.json());
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 48,
    },
  })
);
User.hasMany(Kar)
Kar.belongsTo(User)

app.post('/api/seed', seed)
app.post('/api/kar', createKar)
app.get('/api/kar/:id')
app.get('/api/kars', getAllKars)
app.delete('/api/kar/:id')
app.post('/api/register', register)
app.post("/api/login", login);

app.get("/api/checkUser", async (req, res) => {
  console.log(req.session);
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(400).send("No user found");
  }
});

db.sync()
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
