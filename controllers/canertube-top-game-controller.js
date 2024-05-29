const CanertubeTopGameModel = require('../models/canertube-top-game-model');

const CanertubeTopGameController = {
    getTopGameCanertubeVideoController: async function (req, res) {
        try {
            const videos = await CanertubeTopGameModel.getTopGameCanertubeVideos();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports =  CanertubeTopGameController;