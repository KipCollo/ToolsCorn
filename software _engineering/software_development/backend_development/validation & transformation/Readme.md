# Validations & Transformations.

Validations and transformations are not a single feature you install. They are a set of rules and guidelines you keep in mind while designing your APIs. Almost everything about them traces back to two goals, and those two goals are the lens through which every later decision is made:

1. Data Integrity - Whatever data finally reaches your business logic and your database is in the exact shape your application expects, correct fields, correct types, correct ranges, correct meaning.
2. Security - Untrusted input from the outside world is never allowed to drive your system into an unexpected, unhandled state. The server stays defensive about everything that crosses its boundary.

The validation boundary covers every kind of data a client can push at the server, not just the request body. All of the following must be treated as untrusted until proven otherwise:

- JSON payloads: the body of a POST / PUT / PATCH request.
- Query parameters: e.g. ?page=2&limit=20.
- Path parameters: e.g. the 5 in /users/5.
- Headers: anything the client sets on the request.
