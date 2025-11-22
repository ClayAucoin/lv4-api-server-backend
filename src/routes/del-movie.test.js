// src/routes/del-movie.test.js

import { describe, it, expect, beforeEach } from "vitest"
import request from "supertest"
import express from "express"

import app from "../app.js"
import delMovieRouter from "./del-movie.js"
import data from "../data.js"

const router = express()
router.use(express.json())
router.use("/", delMovieRouter)

const originalMovies = JSON.parse(JSON.stringify(data))

beforeEach(() => {
  data.length = 0
  data.push(...JSON.parse(JSON.stringify(originalMovies)))
})

describe("GET /del-movie", () => {
  it("returns movies and does not delete anything", async () => {
    const res = await request(router).get("/")

    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.message).toBe("Nothing deleted")
    expect(res.body.data).toEqual(data)
  })
})

describe("DELETE /del-movie/:id", () => {
  it("deletes a movie successfully", async () => {
    const res = await request(router).delete(`/8`)

    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.message).toBe("Movie deleted successfully")
    expect(res.body.data.id).toBe(8)

    const find = data.find((m) => m.id === 8)
    expect(find).toBeUndefined()
  })

  it("returns 404 when movie does not exist", async () => {
    const res = await request(app).delete("/9999")

    expect(res.status).toBe(404)
    expect(res.body.ok).toBe(false)
    expect(res.body.error.code).toBe("NOT_FOUND")
  })
})

describe("GET /del-movie/:id", () => {
  it("deletes a movie using GET delete route", async () => {
    const res = await request(router).get(`/8`)

    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.data.id).toBe(8)

    const find = data.find((m) => m.id === 8)
    expect(find).toBeUndefined()
  })

  it("returns 404 when deleting nonexistent movie with GET", async () => {
    const res = await request(app).get("/9999")

    expect(res.status).toBe(404)
    expect(res.body.ok).toBe(false)
    expect(res.body.error.code).toBe("NOT_FOUND")
  })
})
