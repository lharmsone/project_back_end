import mongoose from 'mongoose';

// {"title": "foo", "isCompleted": true, "labels": [123, 321]}
const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    textIntro: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    textLong: {
        type: String,
        required: true,
    },
       
    labels: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const article = mongoose.model('Article', articleSchema);

export default article;