import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/auth/google", passport.authenticate("google", {scope: ["profile", "email"]}));
router.get("/auth/google/callback",
    passport.authenticate("google", {failureRedirect: "/"}),
    (req, res) => {
        res.redirect("/profile"); //this send the user status
    }
);

export default router;

