const CanertubeUserModel = require('../models/canertube-user-model');
const FollowerModel = require('../models/follower-model');

const FollowerController = {
    getFollowerByUserIDController: async function (req, res) {
        try {
            const user = req.user;
            if (user) {
                const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
                console.log("profile " , profile);

                if (profile) {
                    const followers = await FollowerModel.getFollowerListByUserID(profile);
                    console.log("followers " , followers);

                    return res.json(followers); 
                } else {
                    return res.status(404).json({ error: "Profile not found" });
                }
            } else {
                return res.status(400).json({ error: "User not authenticated" });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
    },
};

module.exports = FollowerController;
