const CanertubeNewsVideoModel = require('../models/canertube-news-video-model');

const CanertubeNewsVideoController = {
    getNewsCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeNewsVideoModel.getNewsCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeNewsVideoController;