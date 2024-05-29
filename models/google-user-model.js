const dbConfig = require('../dbConfig');
const mssql = require('mssql');


const GoogleUserModel = {
    addGoogleUser: async function (user) {
        try {
            const pool = await mssql.connect(dbConfig);
            const result = await pool.request()
                .input('display_name', mssql.NVarChar, user.displayName)
                .input('given_name', mssql.NVarChar, user.name.givenName)
                .input('family_name', mssql.NVarChar, user.name.familyName)
                .input('user_name', mssql.NVarChar, user.name.givenName + user.name.familyName)
                .input('email', mssql.NVarChar, user.emails[0].value)
                .input('photo', mssql.NVarChar, user.photos[0].value)
                .query(`INSERT INTO Users 
                (display_name, email ,given_name, family_name, user_name , photo)  VALUES 
                (@display_name, @email ,@given_name, @family_name, @user_name , @photo)`);
            console.log('result:', result);
            if (result.rowsAffected && result.rowsAffected[0] === 1) {
                console.log('Kullanıcı başarıyla eklenmiştir.');
                return result;
            } else {
                console.error('Kullanıcı ekleme sorgusu beklenen sonucu döndürmedi.');
                return { error: 'Kullanıcı ekleme sorgusu beklenen sonucu döndürmedi.' };
            }
        } catch (err) {
            console.error('Error : ', err);
            return { error: err.message }; 
        }
    },
}

module.exports = GoogleUserModel;