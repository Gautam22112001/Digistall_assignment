import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./api/route.js";
import Connection from "./database/db.js";

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server is running successfully on PORT: ${PORT}`);
});

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

Connection();

export default app;
