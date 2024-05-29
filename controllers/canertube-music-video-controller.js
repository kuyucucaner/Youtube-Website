const CanertubeMusicVideoModel = require('../models/canertube-music-video-model');

const CanertubeMusicVideoController = {
    getMusicCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeMusicVideoModel.getMusicCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeMusicVideoController;