const express = require("express");
const { User } =  require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const zod = require("zod");
const router = express.Router();

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    password: zod.string()
})


router.post("/signup", async(req,res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if (!success) {
        return res.json({
            message: "email is already taken"
        })
    }

    const user = User.findone({
         username: body.username
    })
    if (user._id) {
        return res.json({
            message: "email is already taken"
        })
    }

    const dbuser = await user.Create(body);
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)
   res.json({
    message: "user created successfully",
    token: token
   })
})


module.exports = router;