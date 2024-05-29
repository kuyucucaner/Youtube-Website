const connect = require('../dbConfig');
const mssql = require('mssql');

const CheckExist = {
    checkDisplayNameExistence: async function (displayName) {
        try {
            const pool = await mssql.connect(connect);
            const queryResult = await pool
                .request()
                .input('display_name', mssql.NVarChar, displayName)
                .query('SELECT COUNT(*) AS count FROM Users WHERE display_name = @display_name');
            const userCount = queryResult.recordset[0].count;
            return userCount > 0;
        } catch (error) {
            console.error('Display name varlığı kontrolü sırasında bir hata oluştu:', error);
            throw error; 
        }
    },  
};

module.exports = CheckExist;