// Shared utilities for all Spotify API functions
const CLIENT_ID = "1bcb3e3967fa4d3b9ffa20b2e91349f1";

// Store current access token in memory (will reset on each cold start)
let currentAccessToken = null;
let tokenExpiresAt = null;

// Function to get a fresh access token using refresh token
export async function getValidAccessToken() {
  const CLIENT_SECRET = process.env.CLIENT_SECRET_KEY;
  const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;
  
  // Check if current token is still valid (with 5 minute buffer)
  if (currentAccessToken && tokenExpiresAt && Date.now() < tokenExpiresAt - 300000) {
    return currentAccessToken;
  }

  // Get new token using refresh token
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
      },
      body: `grant_type=refresh_token&refresh_token=${REFRESH_TOKEN}`
    });

    const tokenData = await response.json();

    if (tokenData.access_token) {
      currentAccessToken = tokenData.access_token;
      tokenExpiresAt = Date.now() + (tokenData.expires_in * 1000);
      
      console.log("✅ Refreshed Spotify access token");
      return currentAccessToken;
    } else {
      throw new Error("Failed to refresh token: " + JSON.stringify(tokenData));
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
}

// CORS headers for all responses
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};