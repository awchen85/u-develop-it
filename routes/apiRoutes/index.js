const { application } = require('express');
const express = require('express');
const router = express.Router();
const apiRoutes = require('./routes/apiRoutes');


//Middlware
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));

app.use('/api', apiRoutes);


module.exports = router;