const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const CLIENT_ID = "1bcb3e3967fa4d3b9ffa20b2e91349f1";

require('dotenv').config();

app.get("/api/spotify-token", async (req, res) => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET_KEY}`,
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch token" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
