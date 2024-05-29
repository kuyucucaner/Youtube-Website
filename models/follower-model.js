const dbConfig = require('../dbConfig');
const mssql = require('mssql');

const FollowerModel = {
    getFollowerListByUserID: async function (profile) {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .input('user_id', mssql.Int, profile[0].user_id)
                .query(`
                SELECT TOP 4 
                Subscriptions.follower_user_id, 
                Users.display_name,
                Users.photo,
                Users.user_id
                FROM Subscriptions
                LEFT JOIN Users 
                    ON Subscriptions.follower_user_id = Users.user_id
                WHERE Subscriptions.following_user_id = @user_id
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

module.exports = FollowerModel;