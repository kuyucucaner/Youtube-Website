const WatchListModel = require('../models/watch-list-model');

const WatchListController = {
    getWatchListByUserIDController: async function (req, res) {
        try {
            const user = req.user;
            const watchlist = await WatchListModel.getWatchListByUserID(user);
            return res.json(watchlist); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = WatchListController;