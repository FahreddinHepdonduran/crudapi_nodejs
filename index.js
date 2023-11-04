const mongoose = require("mongoose");
const express = require("express");
const app = express();
const usersRoutes = require("./routes/userRoute");
const port = process.env.PROT || 3000;

app.use(express.json());

app.use("/users", usersRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
