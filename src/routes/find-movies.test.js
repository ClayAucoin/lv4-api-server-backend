// src/routes/movies.test.js

import { describe, it, expect } from "vitest"
import request from "supertest"
import express from "express"

import app from "../app.js"
import movies from "../data.js"

describe("GET /find-movie", () => {

  it("returns the movies from data.js", async () => {
    const res = await request(app).get("/find-movie/")
    const { ok, data } = res.body

    expect(res.status).toBe(200)
    expect(ok).toBe(true)
    expect(Array.isArray(data)).toBe(true)
    expect(data).toEqual(movies)
  })

  it("returns an array of movie objects with the right shape", async () => {
    const res = await request(app).get("/find-movie/")
    const { ok, data } = res.body

    expect(res.status).toBe(200)
    expect(ok).toBe(true)
    expect(Array.isArray(data)).toBe(true)
    expect(data.length).toBe(movies.length)

    data.forEach((movie) => {
      expect(movie).toMatchObject({
        id: expect.any(Number),
        imdb_id: expect.any(String),
        title: expect.any(String),
        year: expect.any(Number),
      })
    })
  })

  it("includes Monkey Man in the list", async () => {
    const res = await request(app).get("/find-movie/")
    const { ok, data } = res.body

    expect(res.status).toBe(200)
    expect(ok).toBe(true)
    expect(data).toContainEqual(
      expect.objectContaining({
        title: "Monkey Man",
        imdb_id: "tt9214772",
      })
    )
  })
})

describe("GET /find-movie/:ID", () => {

  it("returns single movie with the given id from", async () => {
    const res = await request(app).get("/find-movie/16")
    const { ok, data } = res.body

    expect(res.status).toBe(200)
    expect(ok).toBe(true)
    expect(data).toBeDefined()
    expect(data.id).toBe(16)
    expect(data).toMatchObject({
      id: 16,
      imdb_id: expect.any(String),
      title: expect.any(String),
      year: expect.any(Number)
    })
  })

  it("returns 404 when movie is not found", async () => {
    const res = await request(app).get("/find-movie/99999")

    expect(res.status).toBe(404)
    expect(res.body.ok).toBe(false)
    expect(res.body.error.code).toBe("NOT_FOUND")
  })
})
