import bcrypt from "bcrypt";
import Site from '../Models/Site.model.js';
import Cryptr from 'cryptr';
import mongoose from "mongoose";


const  cryptr = new Cryptr("a1b2c3d4e5f607890abcdef1");

const saveSitePassword = async (req, res) => {
    const { user, siteName, username, password } = req.body;

    if (!siteName || !username || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const siteExists = await Site.findOne({
            $and: [{ siteName: siteName }, { username: username }, { user: user }],
        });

        if (siteExists) {
            return res.status(400).json({ message: "Site already exists" });
        }
        
        const encryptedPassword = cryptr.encrypt(password);

        const newSite = new Site({
            user,
            siteName,
            username,
            password: encryptedPassword
        });

        await newSite.save();
        return res.status(201).json({ message: "Site created successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


const getSitePassword = async (req, res) => {

    const { user } = req.query;

    if(!user) {
        return res.status(400).json({message: "User is required"});
    }

    const sitesExists = await Site.find({user: user});

    if(!sitesExists) {
        return res.status(400).json({message: "No sites found"});
    }

    
    const decryptedSites = sitesExists.map(site => {
        return {
            siteName: site.siteName,
            username: site.username,
            password: cryptr.decrypt(site.password),
        };
    });

    return res.status(200).json({ result: decryptedSites });

}


const removeSitePassword = async (req, res) => {
    const { user, siteName, username } = req.body;

    if(!siteName || !username || !user) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const siteExists = await Site.findOne({
            siteName: siteName,
            username: username,
            user: user,
        });

        if (!siteExists) {
            return res.status(400).json({ message: "Site does not exist" });
        }

        await Site.deleteOne({
            siteName: siteName,
            username: username,
            user: user,
        });

        return res.status(200).json({ message: "Site deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};



export { saveSitePassword , getSitePassword, removeSitePassword };
