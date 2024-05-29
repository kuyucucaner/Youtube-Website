const dbConfig = require('../dbConfig');
const mssql = require('mssql');

const CanertubeShortModel = {
    getCanertubeShorts: async function () {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .query(`
                SELECT TOP 15 
                Shorts.title, 
                Shorts.video_url,
                Shorts.description, 
                Shorts.upload_date,
                Shorts.view_count,
                Shorts.like_count,
                Shorts.dislike_count,
                Users.photo,
                Users.display_name
            FROM 
                Shorts
            LEFT JOIN 
                Users ON Shorts.user_id = Users.user_id
                ORDER BY 
                NEWID();     
                `);

            if (result.recordset && result.recordset.length > 0) {
                const videos = result.recordset;
                return videos;
            } else {
                console.error('Shorts Getirme sorgusu beklenen sonucu döndürmedi.');
                return { error: 'Shorts Getirme sorgusu beklenen sonucu döndürmedi.' };
            }
        } catch (err) {
            console.error('Error : ', err);
            return { error: err.message }; 
        }
    }
};

module.exports = CanertubeShortModel;