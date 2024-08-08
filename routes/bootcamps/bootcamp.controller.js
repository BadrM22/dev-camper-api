const asyncHandler = require('../../middleware/asyncHandler');

exports.httpGetBootcamps = asyncHandler((req, res, next) => {
    return res.status(200).json({ msg: 'GET ALL BOOTCAMPS' });
});

exports.httpGetBootcamp = asyncHandler((req, res, next) => {
    return res.status(200).json({ msg: 'GET SINGLE BOOTCAMP BY ID' });
});

exports.httpCreateBootcamp = asyncHandler((req, res, next) => {
    return res.status(201).json({ msg: 'CREATE BOOTCAMP' });
});

exports.httpUpdateBootcamp = asyncHandler((req, res, next) => {
    return res.status(200).json({ msg: 'UPDATE BOOTCAMP' });
});

exports.httpDeleteBootcamp = asyncHandler((req, res, next) => {
    return res.status(200).json({ msg: 'DELETE BOOTCAMP' });
});
