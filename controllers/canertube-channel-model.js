const CanertubeChannelModel = require('../models/canertube-channel-model');

const CanertubeChannelController = {
    getCanertubeChannelByUserIDController: async function (req, res) {
        try {
            const user = req.user;
            const channel = await CanertubeChannelModel.getCanertubeChannelByUserID(user);
            return res.json(channel); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeChannelController;