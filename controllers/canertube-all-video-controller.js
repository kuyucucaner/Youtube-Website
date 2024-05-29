const CanertubeAllVideoModel = require('../models/canertube-all-video-model');

const CanertubeAllVideoController = {
    getAllCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeAllVideoModel.getAllCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeAllVideoController;