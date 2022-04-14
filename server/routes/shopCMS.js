import express from 'express';

const router = express.Router();

//controllers
import { addShop, getShop } from '../controllers/shopCMS'


router.post('/add-shop', addShop)
router.post(`/get-shop`, getShop)

module.exports = router;