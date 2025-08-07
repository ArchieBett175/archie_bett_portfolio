
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

require('dotenv').config();

const CLIENT_ID = "1bcb3e3967fa4d3b9ffa20b2e91349f1";
const CLIENT_SECRET = process.env.CLIENT_SECRET_KEY;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN; // Add this to your .env

// Store current access token in memory
let currentAccessToken = null;
let tokenExpiresAt = null;

// Function to get a fresh access token using refresh token
async function getValidAccessToken() {
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

// Existing endpoint for Client Credentials (public data)
app.get("/api/spotify-token", async (req, res) => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch token" });
  }
});

// NEW: Get YOUR currently playing track
app.get("/api/my-currently-playing", async (req, res) => {
  try {
    const accessToken = await getValidAccessToken();
    
    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        "Authorization": "Bearer " + accessToken
      }
    });

    if (response.status === 204) {
      // Nothing is currently playing
      return res.json({ isPlaying: false, message: "Nothing is currently playing" });
    }

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching currently playing:", error);
    res.status(500).json({ error: error.message });
  }
});

// NEW: Get YOUR recently played tracks
app.get("/api/my-recently-played", async (req, res) => {
  try {
    const accessToken = await getValidAccessToken();
    const limit = req.query.limit || 10;
    
    const response = await fetch(`https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`, {
      headers: {
        "Authorization": "Bearer " + accessToken
      }
    });

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching recently played:", error);
    res.status(500).json({ error: error.message });
  }
});

// NEW: Get YOUR top tracks
app.get("/api/my-top-tracks", async (req, res) => {
  try {
    const accessToken = await getValidAccessToken();
    const timeRange = req.query.time_range || 'medium_term'; // short_term, medium_term, long_term
    const limit = req.query.limit || 20;
    
    const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=${limit}`, {
      headers: {
        "Authorization": "Bearer " + accessToken
      }
    });

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    res.status(500).json({ error: error.message });
  }
});

// NEW: Get YOUR top artists
app.get("/api/my-top-artists", async (req, res) => {
  try {
    const accessToken = await getValidAccessToken();
    const timeRange = req.query.time_range || 'medium_term';
    const limit = req.query.limit || 20;
    
    const response = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=${limit}`, {
      headers: {
        "Authorization": "Bearer " + accessToken
      }
    });

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching top artists:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("Endpoints available:");
  console.log("  - /api/my-currently-playing");
  console.log("  - /api/my-recently-played");
  console.log("  - /api/my-top-tracks");
  console.log("  - /api/my-top-artists");
});