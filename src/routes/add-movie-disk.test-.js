// src/routes/add-movie.test.js

import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import express from "express"
import fs from "fs"
import path from "node:path"
import appRouter from "./add-movie.js"

const DATA_PATH = path.join("src", "data.json")

const app = express()
app.use(express.json())
app.use(appRouter)

let originalData

beforeAll(() => {
  originalData = fs.readFileSync(DATA_PATH, "utf8")
})

afterAll(() => {
  fs.writeFileSync(DATA_PATH, originalData)
})

describe("Server Routes", () => {
  it("add new movie", async () => {
    const res = await request(app)
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

