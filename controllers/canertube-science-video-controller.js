const CanertubeScienceVideoModel = require('../models/canertube-science-video-model');

const CanertubeScienceVideoController = {
    getScienceCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeScienceVideoModel.getScienceCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeScienceVideoController;