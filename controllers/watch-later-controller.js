const WatchLaterModel = require('../models/watch-later-model');

const WatchLaterController = {
    getWatchLaterByUserIDController: async function (req, res) {
        try {
            const user = req.user;
            const watchlater = await WatchLaterModel.getWatchLaterByUserID(user);
            return res.json(watchlater); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = WatchLaterController;