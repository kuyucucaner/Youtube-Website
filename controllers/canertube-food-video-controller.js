const CanertubeFoodVideoModel = require('../models/canertube-food-video-model');

const CanertubeFoodVideoController = {
    getFoodCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeFoodVideoModel.getFoodCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeFoodVideoController;