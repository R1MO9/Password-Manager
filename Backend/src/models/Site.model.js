import mongoose from "mongoose";

const SiteSchema = new mongoose.Schema({
    siteName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, 
{ 
    timestamps: true 
});

const Site = mongoose.model("Site", SiteSchema);

export default Site;