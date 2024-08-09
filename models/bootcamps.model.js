const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Bootcamp name is requried'],
        trim: true,
    },
    averageCost: Number,
    description: {
        type: String,
        required: [true, 'Bootcamp description is required'],
        trim: true,
    },
    website: {
        type: String,
        trim: true,
        required: [true, 'Bootcamp website is required'],
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Bootcamp email address is requreid'],
    },
    phone: {
        type: String,
        trim: true,
        requried: [true, 'Bootcamp phone number is requried'],
    },
    address: {
        type: String,
        trim: true,
        requried: [true, 'Bootcamp address is requried'],
    },
    carreers: {
        type: [String],
        enum: [
            'Web Development',
            'UI/UX',
            'Business',
            'Mobile Development',
            'Data Science',
        ],
        required: [true, 'Bootcamp carreers is requried'],
    },
    housing: {
        type: Boolean,
        default: false,
    },
    jobAssistance: {
        type: Boolean,
        default: false,
    },
    jobGuarantee: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
