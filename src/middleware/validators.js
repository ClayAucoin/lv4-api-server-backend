// src/utils/validators.js

import { sendError } from "../utils/sendError.js";

export function validateId(req, res, next) {
  const rawid = req.params.id
  const id = Number(rawid)

  // not an integer
  if (!Number.isInteger(id) || isNaN(id)) {
    return next(
      sendError(400, `"id" must be an integer`, "INVALID_ID", { value: rawId })
    )
  }

  // no negative or zero ids
  if (id <= 0) {
    return next(
      sendError(400, `"id" must be greater than 0`, "INVALID_ID", { value: id })
    )
  }

  next();
}

export function validateMovieBody(req, res, next) {
  const { id, imdb_id, title, year } = req.body

  console.log("id:", id, "typeof:", typeof id)

  const missing = []
  if (id === undefined) missing.push("id)")
  if (!title) missing.push("title")
  if (!year) missing.push("year")

  if (missing.length > 0) {
    return next(
      sendError(
        422,
        "Missing required fields",
        "VALIDATION_ERROR",
        { missing }
      )
    )
  }

  // id must be number
  if (typeof id !== "number") {
    return next(
      sendError(
        422,
        `"id" must be a number`,
        "INVALID_TYPE",
        { field: "id", value: id }
      )
    )
  }

  // year must be number
  if (typeof year !== "number") {
    return next(
      sendError(
        422,
        `'year' must be a number`,
        "INVALID_TYPE",
        { field: "year", value: year }
      )
    )
  }

  // year > 1900
  if (year < 1900) {
    return next(
      sendError(
        422,
        `'year' must be greater than 1900`,
        "INVALID_VALUE",
        { field: "year", value: year }
      )
    )
  }

  next()
}