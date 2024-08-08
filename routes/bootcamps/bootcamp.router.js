const { Router } = require('express');
const {
    httpGetBootcamps,
    httpGetBootcamp,
    httpCreateBootcamp,
    httpUpdateBootcamp,
    httpDeleteBootcamp,
} = require('./bootcamp.controller');

const router = Router();

router.route('/').get(httpGetBootcamps).post(httpCreateBootcamp);

router
    .route('/:id')
    .get(httpGetBootcamp)
    .put(httpUpdateBootcamp)
    .delete(httpDeleteBootcamp);

module.exports = router;
