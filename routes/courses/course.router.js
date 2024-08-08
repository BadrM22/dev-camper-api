const { Router } = require('express');
const {
    httpGetCourses,
    httpGetCourse,
    httpCreateCourse,
    httpUpdateCourse,
    httpDeleteCourse,
} = require('./course.controller');

const router = Router();

router.route('/').get(httpGetCourses).post(httpCreateCourse);
router
    .route('/:id')
    .get(httpGetCourse)
    .put(httpUpdateCourse)
    .delete(httpDeleteCourse);

module.exports = router;
