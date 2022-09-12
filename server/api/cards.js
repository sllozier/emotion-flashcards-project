const router = require('express').Router();
const { Card } = require('../db');

router.get('/', async(req, res, next) => {
    try{
        const cards = await Card.findAll();
        res.send(cards);
    }catch(error){
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        const card = await Card.findByPk(req.params.id);
        console.log('CARDAPI', card);
        res.send(card);
    }catch(error){
        next(error);
    }
});




module.exports = router;
