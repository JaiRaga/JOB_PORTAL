const mongoose = require("mongoose");
const db = require("../config/keys").MONGO_URI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log(err));
