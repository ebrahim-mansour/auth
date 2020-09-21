const mongoose = require("mongoose");

module.exports = mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch(() => {
    console.log("Couldn't connect to DB");
    process.exit(1);
  });
