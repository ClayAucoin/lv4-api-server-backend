// src/index.js
import express from "express"
import cors from "cors"
import fileLogger from "./middleware/fileLogger.js"
import colorLogger from "./middleware/colorLogger.js"

// import routes
import rootRouter from "./routes/root.js"
import addMovieRouter from "./routes/add-movie.js"


const app = express();
const port = 3000;

// use log files
app.use(fileLogger)
app.use(colorLogger)

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// use routes
app.use("/", rootRouter)
app.use("/add-movie", addMovieRouter)

// listen
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});

// routes error 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" })
})

// global error handling
app.use((err, req, res, next) => {
  console.error("error:", err.message)

  res.status(err.status || 500).json({
    error: err.message || "server error"
  })
})
