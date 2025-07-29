import dotenv from "dotenv";
import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { FacebookUser } from "../models/facebook_user.mjs";


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
        let findUser = await FacebookUser.findById(id);
        if (!findUser) {
            findUser = await GoogleUser.findById(id);
            if (!findUser) throw new Error("User not found");
        }
        done(null, findUser);
    } catch (err) {
        done(err, null);
    }
});

export default passport.use(new FacebookStrategy(
    {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'email', 'photos']
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log("Inside Facebook Strategy", profile.id);
        let findUser;
        try {
            findUser = await FacebookUser.findOne({ facebookId: profile.id });
        } catch (err) {
            return done(err, null);
        }

        const email = profile.emails?.[0]?.value;

        if (!email) {
            return done(new Error('Email not provided by Facebook'), false);
        }

        try {
            if (!findUser) {
                const newUser = new FacebookUser({
                    username: profile.displayName,
                    email: email,
                    facebookId: profile.id,
                });
                const User = await newUser.save();
                return done(null, User);
            }
            return done(null, findUser);
        } catch (err) {
            console.log(err);
            return done(err, null);
        }
    }
));