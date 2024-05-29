const dbConfig = require('../dbConfig');
const mssql = require('mssql');

const WatchLaterModel = {
    getWatchLaterByUserID: async function (profile) {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .input('user_id', mssql.Int, profile[0].user_id)
                .query(`
                SELECT 
                Watchlists.watch_list_id,
                Watchlists.user_id,
                Watchlists.list_name,
                WatchlistItems.video_id,
                Videos.thumbnail_url,
                Videos.title,
                Videos.upload_date,
                Videos.view_count,
                Users.display_name
            FROM Watchlists
            LEFT JOIN WatchlistItems ON Watchlists.watch_list_id = WatchlistItems.watch_list_id
            LEFT JOIN Videos ON WatchlistItems.video_id = Videos.video_id
            LEFT JOIN Users ON Watchlists.user_id = Users.user_id
            WHERE Watchlists.list_name = 'Daha sonra izle' AND Watchlists.user_id = @user_id
            ORDER BY 
            NEWID();     
            SELECT COUNT(*) AS TotalCountLater
            FROM (
                SELECT 
                    Watchlists.watch_list_id,
                    Watchlists.user_id,
                    Watchlists.list_name,
                    WatchlistItems.video_id,
                    Videos.thumbnail_url,
                    Videos.title,
                    Videos.upload_date,
                    Videos.view_count,
                    Users.display_name
                FROM Watchlists
                LEFT JOIN WatchlistItems ON Watchlists.watch_list_id = WatchlistItems.watch_list_id
                LEFT JOIN Videos ON WatchlistItems.video_id = Videos.video_id
                LEFT JOIN Users ON Watchlists.user_id = Users.user_id
                WHERE Watchlists.list_name = 'Daha sonra izle' AND Watchlists.user_id = @user_id
            ) AS WatchlistDetails;
                `);
                if (result.recordsets && result.recordsets.length === 2) {
                    const videos = result.recordsets[0];
                    const totalCountLater = result.recordsets[1][0].TotalCountLater;
                    return {
                        videos,
                        totalCountLater
                    };
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

module.exports = WatchLaterModel;