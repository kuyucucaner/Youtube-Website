const VideoDetailModel = require('../models/video-detail-model');

const VideoDetailController = {
    getVideoDetailByVideoIDController: async function (req, res) {
        try {
            const videoId = req.params.videoId;

            console.log('Params , ', req.params);
            const video = await VideoDetailModel.getVideoDetailByVideoID(videoId);
            console.log('Video Detai Controller : ', video);
            res.render('video-detail', {
                title: 'Caner Film',
                video: video
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = VideoDetailController;