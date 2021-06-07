const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// Set up Get one, PUT, and DELETE at /api/thoughts/:_id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// for reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)

module.exports = router;