const express = require("express");
const router = express.Router();

// this will respond to anything sent to /api/profile/test - you can see the routes defined fully in the server
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
