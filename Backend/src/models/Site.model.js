import mongoose from 'mongoose';

const SiteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const Site = mongoose.model('Site', SiteSchema);