const CanertubeBeautyVideoModel = require('../models/canertube-beauty-video-model');

const CanertubeBeautyVideoController = {
    getBeautyCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeBeautyVideoModel.getBeautyCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeBeautyVideoController;