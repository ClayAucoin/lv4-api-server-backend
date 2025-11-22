// src/routes/movies.js

import express from "express"
import { sendError } from "../utils/sendError.js"
import movies from "../data.js"

const router = express.Router()

router.get("/", (req, res, next) => {
  try {
    console.log("GET /movies")
    res.status(200).json(movies)
  } catch (err) {
    next(sendError(500, "Failed to read data", "READ_ERROR"))
  }
})

export default router