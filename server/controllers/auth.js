const { connect } = require('gretstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat');
const crypto = require('crypto');


const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const api_id = process.env.STREAM_API_ID;


const signup = (req, res) => {
    try{
        const { fullName, email, password } = req.body

        const userId = crypto.randomBytes(16).toString('hex')

        const serverClient = connect(api_key, api_secret, app_id);

    } catch(err) {
        res.status(500).json({ message: err });
    }
}

const login = (req, res) => {
    try{

    } catch(err) {
        res.status(500).json({ message: err });
    }
}

module.exports = { login, signup };