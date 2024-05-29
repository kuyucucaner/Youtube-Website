const dbConfig = require('../dbConfig');
const mssql = require('mssql');

const VideoCommentModel = {
    getVideoCommentByVideoID: async function (videoId) {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .input('video_id', mssql.Int, videoId)
                .query(`
                SELECT  
                Comments.comment_text,
                Comments.commented_at,
                Users.user_name,
                Users.photo
                FROM Comments
                LEFT JOIN 
                    Users ON Comments.user_id = Users.user_id
                WHERE Comments.video_id = @video_id     
                 `);
            if (result.recordset && result.recordset.length > 0) {
                const video = result.recordset;
                return video;
            } else {
                console.error('Videoları Getirme sorgusu beklenen sonucu döndürmedi.');
                return { error: 'Videoları Getirme sorgusu beklenen sonucu döndürmedi.' };
            }
        } catch (err) {
            console.error('Error : ', err);
            return { error: err.message }; 
        }
    }
};

module.exports = VideoCommentModel;