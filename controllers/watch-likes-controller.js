const WatchLikesModel = require('../models/watch-like-model');

const WatchLikesController = {
    getWatchLikesByUserIDController: async function (req, res) {
        try {
            const user = req.user;
            const watchlikes = await WatchLikesModel.getWatchLikesByUserID(user);
            return res.json(watchlikes); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = WatchLikesController;