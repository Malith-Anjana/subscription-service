import { Router } from 'express';

 const userRoouter = Router();

 userRoouter.get('/', async (req, res) => {
     res.send({title : 'Get all users'})

 })

userRoouter.get('/:id', async (req, res) => {
    res.send({title : 'Get specific user'})

})
userRoouter.post('/', async (req, res) => {
    res.send({title : 'Create a user'})

})

userRoouter.put('/:id', async (req, res) => {
    res.send({title : 'update user'})

})

userRoouter.delete('/:id', async (req, res) => {
    res.send({title : 'delete user'})

})


export default userRoouter;
