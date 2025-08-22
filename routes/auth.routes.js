import { Router } from 'express';

const authRouter = Router();

authRouter.post('sign-up', async (req, res)=> {
    res.send({title: 'Sign-Up'});
})

authRouter.post('sign-in', async (req, res)=> {
    res.send({title: 'Sign-in'});
})

authRouter.post('sign-out', async (req, res)=> {
    res.send({title: 'Sign-out'});
})

export default authRouter;