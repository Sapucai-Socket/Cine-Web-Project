const express = require("express");
const path = require("path");
const router = express.Router();

// menu
router.get('/', function(req, res, next) {
    res.render("homepage")
  })

router.get('/Auth', function(req, res, next) {
  res.render("homeAuth")
})


module.exports = router;

