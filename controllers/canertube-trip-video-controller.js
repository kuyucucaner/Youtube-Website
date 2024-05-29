const CanertubeTripVideoModel = require('../models/canertube-trip-video-model');

const CanertubeTripVideoController = {
    getTripCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeTripVideoModel.getTripCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeTripVideoController;