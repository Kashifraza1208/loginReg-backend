const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const Connection = require("./database/db.js");
const registerRoute = require("./routes/routes.js");
const loginRoute = require("./routes/routes.js");

const app = express();
app.use(cors());

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", loginRoute);
app.post("/register", registerRoute);

const PORT = process.env.PORT || 8000;
Connection();

app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
});
