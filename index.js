const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/usuarios", userRoutes);

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});
