const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const postRouter = require("./routes/postRoute");
const connectionString =
  "mongodb+srv://mikava365:irakli365@cluster0.z6h2hyj.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 4000;

const app = express();

//to limit size of image transfer
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//every route inside of postRoute will start with '/posts'
app.use("/posts", postRouter);

mongoose.set("strictQuery", false);
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server is running on port: ${port}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
