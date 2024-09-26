const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const apiPort = 3000;
const middleware = require("./middlewares/checkAuthUser");
const db = require("./models/db");
const MovieRouter = require("./routes/movieRouter");
const UserRouter = require("./routes/userRouter");
const ReviewRouter = require("./routes/reviewRouter");
const swaggerUi = require('swagger-ui-express');
const authSwaggerDocument = require('./auth_swagger');
const movieSwaggerDocument = require('./movie_swagger');
//db().catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/movies",middleware.checkAuthUser, MovieRouter);
app.use("/api/Review/",middleware.checkAuthUser, ReviewRouter);
app.use("/api/auth", UserRouter);
app.use('/api-docs/auth', swaggerUi.serve, swaggerUi.setup(authSwaggerDocument));
app.use('/api-docs/movie', swaggerUi.serve, swaggerUi.setup(movieSwaggerDocument));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
