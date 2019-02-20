const express = require("express");
const router = express.Router();

// this will respond to anything sent to /api/users/test - you can see the routes defined fully in the server
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
