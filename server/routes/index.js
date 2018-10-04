const express = require('express');
const router = express.Router();

router.get('/newroute', (req, res) => {
  res.end('All good');
});

module.exports = router;
