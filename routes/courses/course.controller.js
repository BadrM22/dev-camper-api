const asyncHandler = require('../../middleware/asyncHandler');

exports.httpGetCourses = asyncHandler((req, res, next) => {
    return res.status(200).json({ msg: 'GET ALL COURSES' });
});
exports.httpGetCourse = asyncHandler((req, res, next) => {
    return res.status(200).json({ msg: 'GET SINGLE COURSE BY ID' });
});
exports.httpCreateCourse = asyncHandler((req, res, next) => {
    return res.status(201).json({ msg: 'CREATE COURSE' });
});
exports.httpUpdateCourse = asyncHandler((req, res, next) => {
    return res.status(200).json({ msg: 'UPDATE COURSE' });
});
exports.httpDeleteCourse = asyncHandler((req, res, next) => {
    return res.status(200).json({ msg: 'DELETE COURSE' });
});
