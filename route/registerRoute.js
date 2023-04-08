const express = require('express');

const router = express.Router();
const {getAllUsers,createUser} = require('../controller/registeruserController')

router.route('/').get(getAllUsers)
router.route('/register').post(createUser)

module.exports = router;