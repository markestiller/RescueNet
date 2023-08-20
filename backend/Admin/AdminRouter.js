import express from 'express';
import { resetAll } from './AdminController.js';
const AdminRouter = express.Router();

AdminRouter.patch('/reset', async (req, res) => {
    await resetAll(res)
});

export default AdminRouter;
