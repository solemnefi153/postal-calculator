const express = require('express');
const calculateRate = require('../../utils/calculateRate')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index');
});

router.post('/getrates', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const mailType = req.body.mailType
    const rate = calculateRate(weight, mailType);
    res.render('results', { weight: weight,  mailType: mailType,  rate: rate});
});


module.exports = router;


