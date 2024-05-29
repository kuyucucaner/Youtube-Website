const dbConfig = require('../dbConfig');
const mssql = require('mssql');

const CanertubeChannelModel = {
    getCanertubeChannelByUserID: async function (userId) {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .input('user_id', mssql.Int,userId)
                .query(`
                SELECT * 
                FROM 
                    Users
                WHERE 
                    user_id = @user_id    
                `);
            if (result.recordset && result.recordset.length > 0) {
                const user = result.recordset;
                return user;
            } else {
                console.error('Kanalı getirme sorgusu beklenen sonucu döndürmedi.');
                return { error: 'Kanalı getirme sorgusu beklenen sonucu döndürmedi.' };
            }
        } catch (err) {
            console.error('Error : ', err);
            return { error: err.message }; 
        }
    },
    getCanertubeChannelVideosByUserID : async function (userId){
        try{
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .input('user_id', mssql.Int,userId)
                .query(`
                SELECT 
                    Videos.thumbnail_url,
                    Videos.title,
                    Videos.view_count,
                    Videos.upload_date,
                    Videos.video_id,
                    Users.display_name
                FROM 
                    Videos
                LEFT JOIN 
                 Users ON Videos.user_id = Users.user_id
                WHERE 
                    Videos.user_id = @user_id    
                `);
            if (result.recordset && result.recordset.length > 0) {
                const user = result.recordset;
                return user;
            } else {
                console.error('Kanalı getirme sorgusu beklenen sonucu döndürmedi.');
                return { error: 'Kanalı getirme sorgusu beklenen sonucu döndürmedi.' };
            }
        }
        catch (err) {
            console.error('Error : ', err);
            return { error: err.message }; 
        }
    }
};

module.exports = CanertubeChannelModel;