const CanertubeTopSportModel = require('../models/canertube-top-sport-model');

const CanertubeTopSportController = {
    getTopMusicCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeTopSportModel.getTopSportCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports =  CanertubeTopSportController;