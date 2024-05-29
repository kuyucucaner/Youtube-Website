const dbConfig = require('../dbConfig');
const mssql = require('mssql');

const WatchHistoryModel = {
    getWatchHistoryByUserID: async function (userId) {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .input('user_id' , mssql.Int , userId)
                .query(`
                SELECT
                WatchHistories.history_id,
                WatchHistories.video_id,
				WatchHistories.watch_date,
                Videos.title, 
                Videos.thumbnail_url, 
                Videos.video_url,
                Videos.description,
                Users.display_name,
                Videos.upload_date,
                Videos.view_count
                FROM 
                    WatchHistories
                LEFT JOIN 
                    Videos ON WatchHistories.video_id = Videos.video_id
                LEFT JOIN
                    Users ON WatchHistories.user_id = Users.user_id
                WHERE 
                    WatchHistories.user_id = @user_id
				ORDER BY 
                WatchHistories.watch_date DESC;
                
                `);
            if (result.recordset && result.recordset.length > 0) {
                const videos = result.recordset;
                return videos;
            } else {
                console.error('Videoları Getirme sorgusu beklenen sonucu döndürmedi.');
                return { error: 'Videoları Getirme sorgusu beklenen sonucu döndürmedi.' };
            }
        } catch (err) {
            console.error('Error : ', err);
            return { error: err.message }; 
        }
    },
    addWatchHistory: async function (videoData) {
        const { video_id , user_id } = videoData;
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
            .request()
            .input('video_id' , mssql.Int , video_id)
            .input('user_id' , mssql.Int , user_id)
            .query(`
                INSERT INTO WatchHistories
                (video_id , user_id) 
                VALUES 
                (@video_id , @user_id)
            `);
            if (result.rowsAffected && result.rowsAffected.length > 0 && result.rowsAffected[0] === 1) {
                console.log('Video izlenme geçmişine başarıyla eklendi.');
                return { success: 'Video izlenme geçmişine başarıyla eklendi.' };
              } else {
                console.error('Video izlenme geçmişine eklenemedi!');
                console.error(result); 
                return { error: 'Video izlenme geçmişine eklenemedi!' };
              }
            } catch (err) {
              console.error('Hata: ', err);
              console.error('Video izlenme geçmişi eklenme sırasında bir hata oluştu:', err.message);
              return { error: 'Video izlenme geçmişi sırasında bir hata oluştu: ' + err.message };
            }
        }
};

module.exports = WatchHistoryModel;