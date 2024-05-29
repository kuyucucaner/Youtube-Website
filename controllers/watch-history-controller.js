const WatchHistoryModel = require('../models/watch-history-model');

const WatchHistoryController = {
    getWatchHistoryController: async function (req, res) {
        try {
            const videos = await WatchHistoryModel.getWatchHistory();
            return res.json(videos); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
    addWatchHistoryController: async function (req, res) {
        try{
            const videoId = req.body.video_id;
            const userId = req.body.user_id;
            const result = await WatchHistoryModel.addWatchHistory({
                video_id : videoId,
                user_id : userId
            });
            if(result.success){
                res.status(200).json({success : true , message:'Video izlenme geçmişine eklendi!'});
            }
            else {
                console.error(result);
                console.error('Video izlenme listesine eklenirken bir hata oluştu!');
                res.status(500).json({success:false , error : 'Video izlenme geçmişine eklenirken bir hata oluştu!'});
            }
        }
        catch (error){
            console.error('Hata tipi : ' , error.name);
            console.error('Hata mesajı : ', error.message);
            console.error('Hata detayları : ', error);
            return res.status(500).json({success:false , error: 'Video izlenme geçmişine eklenirken bir hata oluştu!'});
        }
    }
};

module.exports = WatchHistoryController;