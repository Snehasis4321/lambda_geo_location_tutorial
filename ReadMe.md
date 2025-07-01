# Lambda Geo Location Tutorial

An AWS Lambda function that retrieves geolocation data based on client IP addresses using the IP2Location API.

## Features

- Extracts client IP from AWS Lambda event context
- Fetches geolocation data using IP2Location API
- Returns location information including country, region, city, and coordinates
- Handles errors gracefully with proper HTTP status codes
- CORS-enabled for cross-origin requests

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:
   - `API_KEY`: Your IP2Location API key

## API Response

The function returns a JSON response with:

- `clientIP`: The detected client IP address
- `locationData`: Geolocation information from IP2Location API

### Success Response (200)

```json
{
  "clientIP": "192.168.1.1",
  "locationData": {
    "country_code": "US",
    "country_name": "United States",
    "region_name": "California",
    "city_name": "San Francisco",
    "latitude": 37.7749,
    "longitude": -122.4194
  }
}
```

### Error Response (500)

```json
{
  "error": "API key not found"
}
```

## Deployment

This function is designed to be deployed as an AWS Lambda function with Function URL or API Gateway integration.
