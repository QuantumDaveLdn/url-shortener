# URL Shortener Microservice

A simple API service that shortens URLs for easier sharing and tracking.

## Project Background

This project is part of the freeCodeCamp "Back End Development and APIs" certification. It builds on skills acquired in previous sections:

* Managing Packages with NPM (✓ COMPLETED)
* Basic Node and Express (✓ COMPLETED)
* MongoDB and Mongoose (✓ COMPLETED)
* Backend APIs and Microservices Projects (⏳ IN PROGRESS)

## Features

This API provides the following endpoints:

- `POST /api/shorturl` - Creates a shortened URL
  - Request body: `{ url: String }`
  - Response: `{ original_url: String, short_url: Number }`

- `GET /api/shorturl/:short_url` - Redirects to the original URL
  - Response: Redirects to the original URL or returns an error if not found

## Example Responses

### Creating a shortened URL:
```json
{
  "original_url": "https://www.freecodecamp.org",
  "short_url": 1
}
```

### Using a shortened URL:
When accessing `GET /api/shorturl/1`, the server redirects to the original URL (e.g., https://www.freecodecamp.org).

## Technologies Used

- Node.js
- Express.js
- URL validation

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with your port:
   ```
   PORT=3000
   ```
4. Start the server:
   ```
   npm start
   ```
5. Visit `http://localhost:3000` in your browser to access the user interface

## Project Structure

- `index.js` - The main application file with the server configuration and API endpoints
- `views/index.html` - The front-end interface for submitting URLs
- `public/style.css` - Styling for the front-end interface

## Skills Acquired

* URL validation and processing
* HTTP redirects implementation
* RESTful API design principles
* Express route handling
* In-memory data storage
* Form data processing
* Client-server interaction
* HTTP method implementation (GET, POST)
* JSON response formatting

*This project demonstrates practical backend development skills for creating URL shortening services, which are widely used across the web to make long URLs more manageable and trackable.*
