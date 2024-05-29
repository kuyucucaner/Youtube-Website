const dbConfig = require('../dbConfig');
const mssql = require('mssql');

const SearchVideoModel = {
    getSearchedVideo: async function (query) {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool
                .request()
                .input('query', mssql.NVarChar, `%${query}%`)
                .query(`
                SELECT Videos.*, Users.photo
                FROM Videos
                LEFT JOIN Users ON Videos.user_id = Users.user_id
                WHERE Videos.title LIKE @query;
                                `);
            if (result.recordset && result.recordset.length > 0) {
                const movie = result.recordset;
                return movie;
            } else {
                console.error('Aranan Film Bulunamadı.');
                return { error: 'Aranan Film Bulunamadı.' };
            }
        } catch (err) {
            console.error('Hata:', err);
            return { error: err.message };
        }
    }
};

module.exports = SearchVideoModel;