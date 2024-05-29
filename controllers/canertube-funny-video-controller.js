const CanertubeFunnyVideoModel = require('../models/canertube-funny-video-model');

const CanertubeFunnyVideoController = {
    getFunnyCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeFunnyVideoModel.getFunnyCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeFunnyVideoController;