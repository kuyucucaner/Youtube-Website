const CanertubeShortModel = require('../models/canertube-short-model');

const CanertubeShortController = {
    getCanertubeShortController: async function (req, res) {
        try {
            const shorts = await CanertubeShortModel.getCanertubeShorts();
            return res.json(shorts); 
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message }); 
        }
    },
};

module.exports = CanertubeShortController;