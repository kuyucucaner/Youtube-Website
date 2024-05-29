const CanertubeTopMusicModel = require('../models/canertube-top-music-model');

const CanertubeTopMusicController = {
    getTopMusicCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeTopMusicModel.getTopMusicCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports =  CanertubeTopMusicController;