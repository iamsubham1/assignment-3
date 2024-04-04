const User = require('../models/userModel');
const bcrypt = require("bcryptjs");


const signupController = async (req, res) => {
    try {
        const email = req.body.email;
        let user = await User.findOne({ email: email });
        if (!user) {

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            user = await User.create({
                name: req.body.name,
                password: hashedPassword,
                email: req.body.email,
                username: req.body.username,
                termsAgreed: req.body.termsAgreed

            })


            return res.status(200).send(user._id);
        } console.log("Account exists Login instead");
        return res.status(400).json({ error: "account exists" });

    }
    catch (error) {
        console.error(error.message);
        return res.status(500).send("internal Server error ");
    }
}

module.exports = { signupController };