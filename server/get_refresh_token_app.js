const express = require("express");
const app = express();

require("dotenv").config();

const CLIENT_ID = "1bcb3e3967fa4d3b9ffa20b2e91349f1";
const CLIENT_SECRET = process.env.CLIENT_SECRET_KEY;
const REDIRECT_URI = "http://127.0.0.1:3000/getrefreshtoken";

//auth in browser for host account

app.get("/get-my-token", (req, res) => {
  const scope =
    "user-read-currently-playing user-read-playback-state user-read-recently-played";

  const authUrl =
    "https://accounts.spotify.com/authorize?" +
    "response_type=code" +
    "&client_id=" +
    CLIENT_ID +
    "&scope=" +
    encodeURIComponent(scope) +
    "&redirect_uri=" +
    encodeURIComponent(REDIRECT_URI);

  res.redirect(authUrl);
});

app.get("/getrefreshtoken", async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.send("Error: No authorization code received");
  }

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
      },
      body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(
        REDIRECT_URI
      )}`,
    });

    const tokenData = await response.json();

    if (tokenData.refresh_token) {
      res.send(`
        <h2>Success! Copy this refresh token to your .env file:</h2>
        <p><strong>SPOTIFY_REFRESH_TOKEN=${tokenData.refresh_token}</strong></p>
        <p>Access Token (expires in 1 hour): ${tokenData.access_token}</p>
        <p>You can now stop this server and use the refresh token in your main app.</p>
      `);
    } else {
      res.send("Error: " + JSON.stringify(tokenData));
    }
  } catch (error) {
    res.send("Error: " + error.message);
  }
});

app.listen(3000, () => {
  console.log("Visit: http://localhost:3000/get-my-token");
  console.log(
    "After getting your refresh token, stop this server and use your main app."
  );
});
