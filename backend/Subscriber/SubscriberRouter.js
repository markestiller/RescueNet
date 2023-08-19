import express from 'express';
import { create, read, update } from './SubscriberController.js';
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

export default SubscriberRouter;
