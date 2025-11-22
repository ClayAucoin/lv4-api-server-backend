// src/index.js
import express from "express"
import cors from "cors"
import fileLogger from "./middleware/fileLogger.js"
import colorLogger from "./middleware/colorLogger.js"
import { sendError } from "./utils/sendError.js"

// import routes
import rootRouter from "./routes/root.js"
import moviesRouter from "./routes/movies.js"
import findMovieRouter from "./routes/find-movie.js"
import addMovieRouter from "./routes/add-movie.js"
import delMovieRouter from "./routes/del-movie.js"


const app = express();
// const port = 3000;

// use log files
app.use(fileLogger)
app.use(colorLogger)

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// use routes
app.use("/", rootRouter)
app.use("/movies", moviesRouter)
app.use("/find-movie", findMovieRouter)
app.use("/add-movie", addMovieRouter)
app.use("/del-movie", delMovieRouter)

// routes error 404
app.use((req, res, next) => {
  next(sendError(404, "Route not found", "NOT_FOUND"))
})

// global error handling
app.use((err, req, res, next) => {
  // console.error("error stack:", err.stack)

  const status = err.status || 500
  const code = err.code || "INTERNAL_ERROR"
  const message = err.message || "Server error"

  const payload = {
    ok: false,
    error: {
      status,
      message,
      code
    }
  }

  if (err.details) {
    payload.error.details = err.details
  }

  res.status(status).json(payload)
})

export default app