const dbConfig = require('../dbConfig');
const mssql = require('mssql');

const VideoDetailModel = {
    getVideoDetailByVideoID: async function (videoId) {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .input('video_id', mssql.Int, videoId)
                .query(`
                SELECT  * ,
                 Users.display_name,
                 Users.photo
                FROM Videos
                LEFT JOIN 
                    Users ON Videos.user_id = Users.user_id
                WHERE Videos.video_id = @video_id     
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

module.exports = VideoDetailModel;