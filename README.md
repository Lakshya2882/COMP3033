# COMP3033
# Lab 2: Calculator API

This project is a Node.js application built with the `connect` module. It sets up a basic server that performs simple math operations (`add`, `subtract`, `multiply`, `divide`) based on URL query parameters. The app is designed to showcase the use of middleware and handle HTTP GET requests with query parsing.

## Features

- Handles four basic math operations: addition, subtraction, multiplication, and division.
- Parses query parameters `method`, `x`, and `y` from the URL.
- Validates numeric inputs and handles edge cases (e.g., division by zero).
- Returns results in a structured JSON format.
- Automatically restarts the server when changes are saved using `nodemon`.
