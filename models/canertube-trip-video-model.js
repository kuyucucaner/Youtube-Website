const dbConfig = require('../dbConfig');
const mssql = require('mssql');

const CanertubeTripVideoModel = {
    getTripCanertubeVideos: async function () {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .query(`
                SELECT 
                Videos.title, 
                Videos.thumbnail_url, 
                Videos.video_url,
                Users.photo,
                Users.display_name,
                Videos.upload_date,
                Videos.view_count
                FROM 
                    Videos
                LEFT JOIN 
                    Users ON Videos.user_id = Users.user_id
                WHERE 
                    Videos.category_id = 10 
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

module.exports = CanertubeTripVideoModel;