const VideoCommentModel = require('../models/video-comment-model');

const VideoCommentController = {
    getVideoCommentByVideoIDController: async function (req, res) {
        try {
            const videoId = req.params.videoId;
            console.log('Params , ', req.params);
            const video = await VideoCommentModel.getVideoCommentByVideoID(videoId);
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

module.exports = VideoCommentController;