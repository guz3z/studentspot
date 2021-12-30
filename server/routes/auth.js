const express = require('express');
const { ModelBuildInstance } = require('twilio/lib/rest/autopilot/v1/assistant/modelBuild');

const { signup, login } = require('../controllers/auth.js')

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);


module.exports = router;