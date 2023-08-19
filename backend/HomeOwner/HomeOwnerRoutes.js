import express from 'express';
const router = express.Router();

import { getById, create} from './HomeOwnerController.js';

router.post('/', async (req, res) => {
    create(req.body, res);
});


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    getById(id, res);
});

export default router


