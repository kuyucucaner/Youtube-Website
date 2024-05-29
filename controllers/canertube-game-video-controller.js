const CanertubeGameVideoModel = require('../models/canertube-game-video-model');

const CanertubeGameVideoController = {
    getGameCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeGameVideoModel.getGameCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeGameVideoController;