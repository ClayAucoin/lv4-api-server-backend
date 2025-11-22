// src/routes/add-movie.js

import express from "express"
import movies from "../data.js"
import { randomUUID } from "node:crypto"
import { validateMovieBody } from "../middleware/validators.js"

const app = express.Router()

app.get("/", (req, res) => {
  console.log("GET /add-movie")
  res.status(200).json({
    ok: true,
    message: "Nothing added to movie list",
    data: currentMovies
  })
})

app.post("/", validateMovieBody, (req, res) => {
  console.log("POST /add-movie", req.body)
  // const newMovie = { ...req.body, id: randomUUID() }
  // const newMovie = { ...req.body }

  const newMovie = req.body
  movies.push(newMovie)
  res.status(200).json({
    ok: true,
    message: "Movie added successfuly",
    data: newMovie
  })
})

export default app