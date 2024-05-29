const dbConfig = require('../dbConfig');
const mssql = require('mssql');

const WatchListModel = {
    getWatchListByUserID: async function (profile) {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .input('user_id', mssql.Int, profile[0].user_id)
                .query(`
                SELECT 
                Watchlists.list_name,
                COUNT(*) AS video_count,
                (SELECT TOP 1 thumbnail_url FROM Videos ORDER BY video_id DESC) AS latest_video_image
            FROM 
                WatchlistItems
            LEFT JOIN 
                Watchlists ON Watchlists.watch_list_id = WatchlistItems.watch_list_id
            WHERE 
                Watchlists.user_id = @user_id
            GROUP BY
                Watchlists.list_name
                ORDER BY 
                NEWID();     
            
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
    }
};

module.exports = WatchListModel;