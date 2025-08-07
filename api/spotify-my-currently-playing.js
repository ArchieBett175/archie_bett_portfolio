import { getValidAccessToken } from './spotify-utils.js';

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).setHeader('Access-Control-Allow-Origin', '*').end();
  }

  try {
    const accessToken = await getValidAccessToken();
    
    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        "Authorization": "Bearer " + accessToken
      }
    });

    if (response.status === 204) {
      // Nothing is currently playing
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(200).json({ isPlaying: false, message: "Nothing is currently playing" });
    }

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.status}`);
    }

    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching currently playing:", error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ error: error.message });
  }
}