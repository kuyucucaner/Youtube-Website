const CanertubeTrendModel = require('../models/canertube-trend-model');

const CanertubeTrendController = {
    getTrendCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeTrendModel.getTrendCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeTrendController;