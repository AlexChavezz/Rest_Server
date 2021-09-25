const { Router } = require('express');
const router = Router();
const { getUsers, deleteUser, putUsers, postUsers } = require('../controllers/users');

router.get('/', getUsers);

router.put(`/:id`, putUsers);
router.post('/', postUsers); 
router.delete('/', deleteUser);

module.exports = router;