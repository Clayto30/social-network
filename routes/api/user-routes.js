const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// Set up Get one, PUT, and DELETE at /api/users/:_id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// adding friends
router
    .route('/:userId/friends/:friendId')
    .put(addFriend)
    .delete(removeFriend)

module.exports = router;
