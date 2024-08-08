const { Router } = require('express');
const BootcampRouter = require('./bootcamps/bootcamp.router');
const CourseRouter = require('./courses/course.router');
const router = Router();

router.use('/bootcamps', BootcampRouter);
router.use('/courses', CourseRouter);
module.exports = router;
