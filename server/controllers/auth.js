const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');

require('dotenv').config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;


const signup = async (req, res) => {
    try{
        const { fullName, email, password } = req.body

        const userId = crypto.randomBytes(16).toString('hex')

        const serverClient = connect(api_key, api_secret, app_id);

        const hashedPassword = await bcrypt.hash(password, 10); //a new user will have a hashedPassword created for them

        const token = serverClient.createUserToken(userId);

        res.status(200).json({ token, fullName, email, userId, hashedPassword });

    } catch(err) {
        res.status(500).json({ message: err });
    }
}

const login = async (req, res) => {
    try{
        const { email, password } = req.body;

        const serverClient = connect(api_key, api_secret, app_id);

        const client = StreamChat.getInstance(api_key, api_secret);

        const { users } = await client.queryUsers({ email: email }); //taking the email and query all the users in the database to see if an email matches

        if(!users.length) return res.status(400).json({ message: 'User not found' });

        const success = await bcrypt.compare(password, users[0].hashedPassword);

        const token = serverClient.createUserToken(users[0].id);

        if(success) {
            res.status(200).json({ token, fullName: users[0].fullName, email, userId: users[0].id});
        } else {
            res.status(500).json({ message: 'Incorrect password' })

        }



    } catch(err) {
        res.status(500).json({ message: err });
    }
}

module.exports = { login, signup };