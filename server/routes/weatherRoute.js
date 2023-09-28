const router = require("express").Router();
const axios = require("axios");

router.get("/getweatherinfo", async (req, res) => {
  try {
    const location = req.query.location;
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);

    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
