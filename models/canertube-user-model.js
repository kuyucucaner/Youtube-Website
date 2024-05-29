const dbConfig = require('../dbConfig');
const mssql = require('mssql');

const CanertubeUserModel = {
    getCanertubeUserByDisplayName: async function (user) {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .input('display_name', mssql.NVarChar, user.displayName)
                .query(`
                SELECT * 
                FROM 
                    Users
                WHERE 
                    display_name = @display_name       
                `);
            if (result.recordset && result.recordset.length > 0) {
                const user = result.recordset;
                return user;
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

module.exports = CanertubeUserModel;