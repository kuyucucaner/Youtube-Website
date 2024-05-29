const CanertubeUserModel = require('../models/canertube-user-model');

const CanertubeUserController = {
    getCanertubeUserByDisplayNameController: async function (req, res) {
        try {
            const user = req.user;
            const person = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
            return res.json(person); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeUserController;