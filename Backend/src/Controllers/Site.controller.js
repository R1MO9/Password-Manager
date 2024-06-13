import bcrypt from "bcrypt";
import Site from '../Models/Site.model.js';

const saveSitePassword = async (req, res) => {
    const { siteName, username, password } = req.body;
    console.log("Received request to save site password:", req.body);

    if (!siteName || !username || !password) {
        console.log("Missing fields in the request body");
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const siteExists = await Site.findOne({
            $and: [{ siteName: siteName }, { username: username }]
        });

        if (siteExists) {
            console.log(`Site already exists: ${siteName}, username: ${username}`);
            return res.status(400).json({ message: "Site already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Password hashed successfully");

        const newSite = new Site({
            siteName,
            username,
            password: hashedPassword
        });

        await newSite.save();
        console.log("Site created successfully:", newSite);
        return res.status(201).json({ message: "Site created successfully" });
    } catch (error) {
        console.error("Error saving site password:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const getSitePasswords = async (req, res) => {
    const { username } = req.body;
};



export { saveSitePassword };
