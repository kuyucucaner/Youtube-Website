const SearchVideoModel = require('../models/search-video-model');

const SearchVideoController = {
    getSearchedVideoController: async function (req, res) {
        try {
            const query = req.body.query; // Burada req.body.query'yi alın
            console.log('Request Body : ', query);
            const video = await SearchVideoModel.getSearchedVideo(query);
            console.log('videos : ' , video );
            res.json(video);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
    },
};

module.exports = SearchVideoController;
