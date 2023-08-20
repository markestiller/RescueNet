import express from 'express';
import {
    create,
    read,
    setEvacuated,
    update,
} from './SubscriberController.js';
const SubscriberRouter = express.Router();

SubscriberRouter.post('/', async (req, res) => {
    let body = req.body;
    await create(body, res);
});

SubscriberRouter.get('/:id', async (req, res) => {
    let id = req.params.id;
    await read(id, res);
});

SubscriberRouter.put('/:id', async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    await update(id, body, res);
});

SubscriberRouter.patch('/:id/setEvacuated', async (req, res) => {
    const id = req.params.id;
    await setEvacuated(id, res);
});

SubscriberRouter.patch('/resetEvacuatedStatus', async (req, res) => {
    await resetAll(res);
});

export default SubscriberRouter;
