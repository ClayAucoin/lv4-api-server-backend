// src/routes/add-movie.js

import express from "express"
import { randomUUID } from "node:crypto"
import { validateMovieBody } from "../middleware/validators.js"
import fs from "fs"
// import data from "../data.json" with { type: "json" }

const app = express.Router()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  console.log("GET /add-movie")

  const raw = fs.readFileSync("src/data.json")
  const currentMovies = JSON.parse(raw)

  res.status(200).json({
    ok: true,
    message: "Movie list",
    data: currentMovies
  })
})

app.post("/", validateMovieBody, (req, res) => {
  console.log("POST /add-movie", req.body)
  // const newMovie = { ...req.body, id: randomUUID() }
  // const newMovie = { ...req.body }
  const newMovie = req.body

  const raw = fs.readFileSync("src/data.json")
  const currentMovies = JSON.parse(raw)

  currentMovies.push(newMovie)

  fs.writeFileSync("src/data.json", JSON.stringify(currentMovies, null, 2))

  res.status(201).send({
    ok: true,
    message: "Movie added successful",
    newMovie
  })
})

export default app