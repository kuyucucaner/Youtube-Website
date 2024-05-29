const GoogleUserModel = require('../models/google-user-model');
const CheckExistModel = require('../models/check-exist-model');


const GoogleUserController = {
    checkGoogleUserSituation :async (req, res) => {
  try {
    const isUserEnable = await CheckExistModel.checkDisplayNameExistence(req.user.displayName);
    if(isUserEnable){
      return res.redirect('/');
    }
    else {
      const user = req.user;
      await GoogleUserModel.addGoogleUser(user);
      return res.redirect('/');
    }
  } catch (error) {
    console.error('Kullanıcı kayıt hatası:', error);
    return res.status(500).json({ error: 'Kullanıcı kayıt Hatası!' });
  }
}
}
module.exports = GoogleUserController;