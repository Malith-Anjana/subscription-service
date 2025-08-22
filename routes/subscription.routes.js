import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', async(req, res) => {
    res.send({title: 'get All subscriptions'});
})
subscriptionRouter.get('/:id', async(req, res) => {
    res.send({title: 'get subscription details'});
})
subscriptionRouter.post('/', async(req, res) => {
    res.send({title: 'Create subscription'});
})
subscriptionRouter.put('/:id', async(req, res) => {
    res.send({title: 'get All subscriptions'});
})
subscriptionRouter.delete('/:id', async(req, res) => {
    res.send({title: 'delete subscription'});
})
subscriptionRouter.get('/user/:id', async(req, res) => {
    res.send({title: 'get All user subscriptions'});
})
subscriptionRouter.put('/user/:id', async(req, res) => {
    res.send({title: 'get All subscriptions'});
})
subscriptionRouter.put('/:id/cancel', async(req, res) => {
    res.send({title: 'cancel subscriptions'});
})
subscriptionRouter.get('/upcomming-renewals', async(req, res) => {
    res.send({title: 'get upcomming renewals'});
})

export default subscriptionRouter;