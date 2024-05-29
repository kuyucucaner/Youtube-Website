const dbConfig = require('../dbConfig');
const mssql = require('mssql');

const CanertubeTrendModel = {
    getTrendCanertubeVideos: async function () {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .query(`
                SELECT TOP 8
                Videos.thumbnail_url,
                Videos.title,
                Videos.view_count,
                Videos.upload_date,
                Videos.description,
                Videos.video_id,
                Users.display_name
            FROM 
                Videos
            LEFT JOIN 
                Users ON Videos.user_id = Users.user_id
            ORDER BY 
                Videos.view_count DESC;
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

module.exports = CanertubeTrendModel;