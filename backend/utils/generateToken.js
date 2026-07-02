import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "15d"});
    res.cookie("jwt", token, {
        httpOnly: true, // prevent XSS attacks i.e., cross-site scripting
        secure: process.env.NODE_ENV !== "development", // only set cookie in production
        sameSite: "strict",
        maxAge: 15 * 24 * 60 * 60 * 1000
    });
}

export default generateTokenAndSetCookie;