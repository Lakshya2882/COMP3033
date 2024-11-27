const connect = require('connect'); // Import the connect module to create the server
const url = require('url'); // Import the url module to parse URL query parameters

// Create the server
const app = connect(); // Initialize a connect server instance

// Middleware to handle GET /lab2
app.use('/lab2', (req, res) => {
  // Parse the query parameters from the URL
  const query = url.parse(req.url, true).query;
  const { method, x, y } = query; // Extract 'method', 'x', and 'y' parameters

  // Convert 'x' and 'y' to numbers
  const numX = parseFloat(x);
  const numY = parseFloat(y);

  // Validate that 'x' and 'y' are valid numbers
  if (isNaN(numX) || isNaN(numY)) {
    // Respond with an error if either parameter is not a number
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Invalid numbers provided' }));
    return;
  }

  let result; // Store the result of the operation
  let operation; // Store the type of operation performed

  // Determine the operation based on the 'method' parameter
  switch (method) {
    case 'add': // Perform addition
      operation = 'add';
      result = numX + numY;
      break;
    case 'subtract': // Perform subtraction
      operation = 'subtract';
      result = numX - numY;
      break;
    case 'multiply': // Perform multiplication
      operation = 'multiply';
      result = numX * numY;
      break;
    case 'divide': // Perform division
      if (numY === 0) {
        // Handle division by zero
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Division by zero is not allowed' }));
        return;
      }
      operation = 'divide';
      result = numX / numY;
      break;
    default:
      // Handle invalid methods
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid method provided' }));
      return;
  }

  // Create the response object with the operation details
  const response = {
    x, // Original value of 'x' (as a string)
    y, // Original value of 'y' (as a string)
    operation, // Type of operation performed
    result: result.toString(), // Result of the operation (converted to a string)
  };

  // Respond with a 200 status and the result in JSON format
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(response));
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`); // Log a message indicating the server is running
});
