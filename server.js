const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
