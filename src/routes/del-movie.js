// src/routes/del-movie.js

import express from "express"
import movies from "../data.js"
import { sendError } from "../utils/sendError.js";

const router = express.Router()
router.use(express.json());

// helper: delete movie
function deleteMovieById(id) {
  const index = movies.findIndex((movie) => movie.id === id)

  if (index === -1) {
    return null
  }

  const [removed] = movies.splice(index, 1)
  return removed
}

router.get("/", (req, res) => {
  try {
    console.log("GET /del-movie")
    res.status(200).json({
      ok: true,
      message: "Nothing deleted",
      data: movies
    })
  } catch (err) {
    next(sendError(500, "Failed to read data", "READ_ERROR"))
  }
})

router.delete("/:id", (req, res, next) => {
  try {
    console.log("DELETE /del-movie")
    const id = Number(req.params.id)

    const removed = deleteMovieById(id)

    if (!removed) {
      return next(sendError(404, "Movie not found", "NOT_FOUND"))
    }

    res.status(200).json({
      ok: true,
      message: "Movie deleted successfully",
      data: removed
    })
  } catch (err) {
    next(sendError(500, "Failed to delete movie", "REMOVE_ERROR"))
  }
})

router.get("/:id", (req, res, next) => {
  try {
    console.log("DELETE /del-movie")
    const id = Number(req.params.id)

    const removed = deleteMovieById(id)

    if (!removed) {
      return next(sendError(404, "Movie not found", "NOT_FOUND"))
    }

    res.status(200).json({
      ok: true,
      message: "Movie deleted successfully",
      data: removed
    })
  } catch (err) {
    next(sendError(500, "Failed to delete movie", "REMOVE_ERROR"))
  }
})

export default router