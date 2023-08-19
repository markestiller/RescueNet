import express from 'express';
const router = express.Router();

import { getById, create} from './HomeOwnerController';

router.post('/', async (req, res) => {
    await create(req);

    // also update new table


    res.sendStatus(200);
});


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const homeOwner = await getById(id);
    return homeOwner;
});



