const CanertubeEducationVideoModel = require('../models/canertube-education-video-model');

const CanertubeEducationVideoController = {
    getEducationCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeEducationVideoModel.getEducationCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeEducationVideoController;