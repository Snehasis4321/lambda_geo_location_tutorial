export const handler = async (event) => {
  try {
    const clientIP = event.requestContext.http.sourceIp;
    const API_KEY = process.env.API_KEY;

    if (!API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "API key not found",
        }),
      };
    }

    // get geolocation
    const locationData = await getLocationData(clientIP, API_KEY);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        clientIP: clientIP,
        locationData: locationData,
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal server error",
        message: error.message,
      }),
    };
  }
};

// function to get geo ip data
async function getLocationData(ip, apiKey) {
  const url = `https://api.ip2location.io/?key=${apiKey}&ip=${ip}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}
