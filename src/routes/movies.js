// src/routes/19-movies.js
// step #19
import express from "express"
import movies from "../data.js"

const router = express.Router()

router.get("/", (req, res) => {
  try {
    console.log("GET /movies")
    res.status(200).json({
      ok: true,
      data: movies
    })
  } catch (err) {
    next(sendError(500, "Failed to read data", "READ_ERROR"))
  }
})

export default router