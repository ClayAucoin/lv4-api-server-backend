---
title: Server Mini-Project: CRUD API in Memory
type: assignment
week: 1
order: 4
section: Week 1
source_file: server-mini-project.md
---

# Server Mini-Project: CRUD API in Memory

Build a RESTful Express API that implements core CRUD operations using in-memory data storage. This project consolidates everything you've learned about Express routes, HTTP status codes, JSON responses, and error handling.

**Focus on just ONE resource** for this project—choose something you're interested in like `cats`, `baseball-cards`, `videos`, or any other single collection. This keeps the scope manageable while you master the fundamentals.

---

## 📚 Instructions

**📖 Start Here:** Review the server lesson guides (Parts 1-5) to understand Express fundamentals, route handling, and testing patterns.

**⚠️ Important:** Please change "items" to a resource of your choosing throughout this project. Examples: `cats`, `baseball-cards`, `videos`, `books`, `pokemon`, or any other collection you're interested in. This makes your API more personal and helps you think about real-world use cases.

**Additional Resources:**

- [Express.js Documentation](https://expressjs.com/)
- [HTTP Status Codes Reference](https://http.cat/)
- [MDN HTTP Methods Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)
- [MDN MIME Types Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types)

---

## ✅ Requirements

Your Express API must include:

- [ ] 1.  **Core CRUD Operations**

  - Routes
    - [x] `/movies/`
      - [x] `GET /movies/` - Return all items (status 200 - OK)
    - [x] `/find-movie/`
      - [x] `GET /find-movies/` - Return all items (status 200 - OK)
      - [x] `GET /find-movie/:id` - Retrieve a specific item (status 200 - OK)
      - [ ] `GET /find-movie/:id` - Movie not found (status 200 - OK)
    - [ ] `/add-movie/`
      - [ ] `GET /add-movie/:id` - Retrieve a specific item (status 200 - OK)
      - [ ] `POST /add-movie/` - Create a new item (status 201 - CREATED)
      - [ ] `POST /add-movie/` - Bad JSON (status 422 - UNPROCESSABLE_ENTITY)
    - [ ] `/del-movie/`
      - [ ] `GET /del-movie/` - Retrieve a specific item (status 200 - OK)
      - [ ] `GET /del-movie/:id` - Retrieve a specific item (status 200 - OK)
      - [ ] `DELETE /del-movie/:id` - Remove a specific item (status 200 - OK)
            <br />
    - [ ] Proper JSON responses for all endpoints
    - [x] _Note: Replace "items" with your chosen resource name (e.g., `/cats`, `/baseball-cards`, `/videos`)_
          <br />

- [ ] 2. **Utils**

  - [ ] **Data Validation**

    - [ ] Return `422 (UNPROCESSABLE_ENTITY)` with input error: `{ "error": "message" }`
      - [ ] Missing `id`
      - [ ] Missing `title`
      - [ ] Missing `year`
      - [ ] Not number `id`
      - [ ] Not number `year`
      - [ ] Below 1900 `year`
    - [ ] Return `400` with JSON error body for invalid input
    - [ ] Consistent error response format across all endpoints
          <br />

  - [ ] **Error Handling**

    - [ ] Return `404 (NOT_FOUND)` with JSON error body when item not found: `{ "error": "message" }`
    - [ ] Return `400 (BAD_REQUEST)` with JSON error body for invalid input
    - [ ] Consistent error response format across all endpoints
          <br />

- [ ] 3. **Data Management**

  - [ ] Use in-memory array to store items
  - [ ] Generate unique IDs for each item (use `crypto.randomUUID()`)
  - [ ] Seed initial data with at least 2-3 sample items
        <br />

- [ ] 4.  **Code Organization**

  - [ ] Export Express app for testing
  - [ ] Clean, readable code structure
  - [ ] Meaningful variable and function names
  - [ ] Comments explaining key sections
        <br />

- [ ] 5. **Testing (Optional but Recommended)**

  - [ ] Set up Vitest with Supertest
  - [ ] Write at least 3 test cases covering happy paths and error cases
  - [ ] Run tests with `npm run test`
        <br />

- [ ] 6. **Documentation**

  - [ ] README.md with setup instructions
  - [ ] Description of endpoints and their behaviors
  - [ ] Example requests/responses
  - [ ] List of technologies used

---

## 🎓 Deliverable

- [ ] 1.  **Submit:** GitHub repository URL containing:

  - [ ] All source code organized in proper structure
  - [ ] Express app with CRUD routes
  - [ ] `package.json` with dependencies
  - [ ] `README.md` with:
    - [ ] Project description
    - [ ] Setup instructions (`npm install`, `npm run dev`)
    - [ ] API endpoint documentation
    - [ ] Example requests using Postman or cURL
    - [ ] Testing instructions (if tests included)
  - [ ] Clear Git commit history (commit after each milestone)

<br />

- [ ] 2. **Before submitting, verify:**
  - [ ] App runs with `npm run dev` without errors
  - [ ] All required CRUD operations implemented
  - [ ] Status codes are appropriate (200, 201, 400, 404)
  - [ ] Error responses use consistent JSON format
  - [ ] README is complete with all sections
  - [ ] Code is clean and commented
  - [ ] Tests pass (if included)

---

## 📝 Project Phases

- [ ] **Phase 1: Setup & Basic Routes**

  - [ ] Initialize Express project
  - [ ] Set up `express.json()` middleware
  - [ ] Choose your resource name (e.g., `cats`, `baseball-cards`, `videos`) and replace "items" throughout
  - [ ] Create in-memory data array with seed data
  - [ ] Implement `GET /items` route

  #### Key Terms

  [API (Application Programming Interface)](../VOCABULARY_LEVEL_4.md#api-application-programming-interface) - A set of rules that lets software systems communicate
  [Express server](../VOCABULARY_LEVEL_4.md#express-server) - A Node.js framework for building APIs and backend routes
  [Local host (localhost)](../VOCABULARY_LEVEL_4.md#local-host-localhost) - Your own computer acting as a server
  [Port](../VOCABULARY_LEVEL_4.md#port) - A numbered communication channel your server listens on
  [index.js (Main script)](../VOCABULARY_LEVEL_4.md#indexjs-main-script) - The main entry file for a Node.js or Express app
  [Module type (module vs commonjs)](../VOCABULARY_LEVEL_4.md#module-type-module-vs-commonjs) - Two ways Node organizes files
  [JSON (JavaScript Object Notation)](../VOCABULARY_LEVEL_4.md#json-javascript-object-notation) - A lightweight data format for sending structured data
  [GET (Method)](../VOCABULARY_LEVEL_4.md#get-method) - Used to request data from the server
  <br />

- [ ] **Phase 2: Create Operation** - [ ] Implement `POST /items` route - [ ] Add validation for required fields - [ ] Generate unique IDs for new items - [ ] Return 201 status with created item

  #### Key Terms

  [POST (Method)](../VOCABULARY_LEVEL_4.md#post-method) - Used to send data to the server (creating something new)
  [Body](../VOCABULARY_LEVEL_4.md#body) - The data sent in an HTTP request or response (usually JSON for APIs)
  [Middleware](../VOCABULARY_LEVEL_4.md#middleware) - Functions in an Express server that run _before_ your route handler
  [Content type (MIME type)](../VOCABULARY_LEVEL_4.md#content-type-mime-type) - A header describing what kind of data is being sent
  <br />

- [ ] **Phase 3: Read/Delete by ID**

  - [ ] Choose either `GET /items/:id` or `DELETE /items/:id`
  - [ ] Implement route parameter handling
  - [ ] Add 404 error handling for missing items
  - [ ] Return appropriate status codes

  #### Key Terms

  [Request](../VOCABULARY_LEVEL_4.md#request) - The message the client sends to the server
  [Response](../VOCABULARY_LEVEL_4.md#response) - The message the server sends back to the client
  [Status codes (200, 404, 500, etc.)](../VOCABULARY_LEVEL_4.md#status-codes-200-404-500-etc) - Numbers describing the result of a request
  <br />

- [ ] **Phase 4: Error Handling & Polish**

  - [ ] Centralize error responses
  - [ ] Add validation for POST requests
  - [ ] Test all endpoints with Postman
  - [ ] Write README documentation

  #### Key Terms

  [HTTP Headers](../VOCABULARY_LEVEL_4.md#http-headers) - Extra information added to a request or response
  [Request headers](../VOCABULARY_LEVEL_4.md#request-headers) - Small pieces of metadata the client sends with a request
  [Response headers](../VOCABULARY_LEVEL_4.md#response-headers) - Metadata sent back with a response
  <br />

- [ ] **Phase 5: Testing (Optional)**

  - [ ] Set up Vitest and Supertest
  - [ ] Write tests for each endpoint
  - [ ] Test both success and error cases
  - [ ] Run coverage report

---

## Need Help?

- [ ] Review the server lesson guides (Parts 1-5)
- [ ] Check Express documentation for route examples
- [ ] Use Postman to test your endpoints
- [ ] Use `console.log()` to debug request/response data
- [ ] Post questions in the discussion forum

---

## 📊 Rubric (100 pts)

- [ ] **Chosen operations work** (0-25 pts)

  - [ ] All implemented routes function correctly
  - [ ] Data persists during server session
  - [ ] IDs are generated and used properly
        <br />

- [ ] **Errors and statuses consistent** (0-25 pts)

  - [ ] Correct HTTP status codes (200, 201, 400, 404)
  - [ ] Consistent JSON error format
  - [ ] Appropriate error messages
        <br />

- [ ] **Project runs from README** (0-25 pts)

  - [ ] Clear setup instructions
  - [ ] Dependencies install correctly
  - [ ] Server starts without errors
        <br />

- [ ] **Code organization** (0-25 pts)
  - [ ] Clean, readable code structure
  - [ ] Proper use of Express patterns
  - [ ] Meaningful naming conventions
  - [ ] Helpful comments

---

**Good luck building your API!** 🚀✨

---

_This mini-project consolidates concepts from Week 1 server lessons and prepares you for database integration in future weeks._
