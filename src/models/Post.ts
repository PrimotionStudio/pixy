import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    scheduledDate: {
        type: Date,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    socialMediaAccounts: {
        type: [String],
        required: true,
        enum: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Youtube', 'Tiktok'],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    aiGenerated: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model('Post', PostSchema);