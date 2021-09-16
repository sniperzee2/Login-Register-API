const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc")
const connectDB = require("./config/db");
const auth = require('./routes/auth');

dotenv.config({ path: "./config/config.env" });
connectDB();

const options = {
  definition:{
    openapi: "3.0.0",
    info:{
      title: "Login Register API",
      version: "1.0.0",
      description: "API for registration and login"
    },
    servers: [{
      url: "http://localhost:8000"
    }],
  },
  apis: ["./routes/*.js"]
  };


const specs = swaggerJsDoc(options)

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use('/',auth)

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
