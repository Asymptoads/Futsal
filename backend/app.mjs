import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import mongoose from "mongoose";
import passport from "passport";

import "./strategies/google_strategy.mjs";
import authRoutes from "./routes/auth.mjs";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => console.log(`MongoDB connection error: ${err}`));

const app = express();

app.use(session({secret: "SECRET", resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

app.use(authRoutes);

const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/profile", (req, res) => {
    res.send(req.user ? `Hello ${req.user}!` : "Not Logged in!");
});

