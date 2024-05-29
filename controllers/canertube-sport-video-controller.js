const CanertubeSportVideoModel = require('../models/canertube-sport-video-model');

const CanertubeSportVideoController = {
    getSportCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeSportVideoModel.getSportCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeSportVideoController;