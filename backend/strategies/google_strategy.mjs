import passport from "passport";
import {Strategy as GoogleStrategy}  from "passport-google-oauth20";
import { GoogleUser } from "../models/google_user.mjs";
import { FacebookUser } from "../models/facebook_user.mjs";
import dotenv from "dotenv";

dotenv.config();

passport.serializeUser((user, done) => { //serialize user into session data
    console.log("Inside serialize user");
    console.log(user);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    console.log("Inside Deserialize");
    console.log(`Deserializing ID: ${id}`);
    try {
        let findUser = await GoogleUser.findById(id);
        if (!findUser){
            findUser = await FacebookUser.findById(id);
            if (!findUser) throw new Error("User not found");
        }
        done(null, findUser);
    } catch (err) {
        done(err, null);
    }
});

export default passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    async(accessToken, refreshToken, profile, done) => {
        console.log("Inside Google Strategy", profile.id);
        let findUser;
        try {
            findUser = await GoogleUser.findOne({ googleId: profile.id});
        } catch (err) {
            return done(err, null);
        };

        try {
            if (!findUser) {
                const newUser = await GoogleUser.create({
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id,
                });
                // const newSavedUser = await newUser.save();
                return done(null, newUser);
            };
            return done(null, findUser);
        } catch (err) {
            console.log(err);
            return done(err, null);
        }
    }
));