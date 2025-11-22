// src/routes/add-movie.test.js

import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express"
import addMovieRouter from "./add-movie.js"

const router = express()
router.use(express.json())
router.use(addMovieRouter)

describe("Server Routes", () => {
  it("add new movie", async () => {
    const res = await request(router)
      .post("/")
      .send({
        "id": 13,
        "imdb_id": "tt9603208",
        "title": "Mission: Impossible - The Final Reckoning",
        "year": 2025,
        "runtime": "2:52:54",
        "rating": "PG-13",
        "poster": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        "genres": ["Action", "Adventure", "Thriller"]
      })

    console.log(res.status, res.body, res.text)

    expect(res.status).toBe(201)
    expect(res.body).toMatchObject({
      "id": 13,
      "imdb_id": "tt9603208",
      "title": "Mission: Impossible - The Final Reckoning",
      "year": 2025,
      "runtime": "2:52:54",
      "rating": "PG-13",
      "poster": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
      "genres": ["Action", "Adventure", "Thriller"]
    })
    expect(res.body.id).toBeDefined()
  });
})

