var express = require('express');
var router = express.Router();
const passport = require('passport');
const  GoogleUserController  = require('../controllers/google-user-controller');
const CanertubeAllVideoModel = require('../models/canertube-all-video-model');
const CanertubeShortModel = require('../models/canertube-short-model');
const CanertubeMusicVideoModel = require('../models/canertube-music-video-model');
const CanertubeGameVideoModel = require('../models/canertube-game-video-model');
const CanertubeFunnyVideoModel = require('../models/canertube-funny-video-model');
const CanertubeEducationVideoModel = require('../models/canertube-education-video-model');
const CanertubeSportVideoModel = require('../models/canertube-sport-video-model');
const CanertubeNewsVideoModel = require('../models/canertube-news-video-model');
const CanertubeBeautyVideoModel = require('../models/canertube-beauty-video-model');
const CanertubeFoodVideoModel = require('../models/canertube-food-video-model');
const CanertubeScienceVideoModel = require('../models/canertube-science-video-model');
const CanertubeTripVideoModel = require('../models/canertube-trip-video-model');
const WatchHistoryModel = require('../models/watch-history-model');
const WatchHistoryController = require('../controllers/watch-history-controller');
const WatchListController = require('../controllers/watch-list-controller');
const WatchListModel = require('../models/watch-list-model');
const CanertubeUserController = require('../controllers/canertube-user-controller');
const CanertubeUserModel = require('../models/canertube-user-model');
const WatchLaterModel = require('../models/watch-later-model');
const WatchLikesModel = require('../models/watch-like-model');
const FollowerController = require('../controllers/follower-controller');
const FollowerModel = require('../models/follower-model');
const SearchVideoController = require('../controllers/search-video-controller');
const SearchVideoModel = require('../models/search-video-model');
const VideoDetailController = require('../controllers/video-detail-controller');
const VideoDetailModel = require('../models/video-detail-model');
const VideoCommentModel = require('../models/video-comment-model');
const CanertubeChannelModel = require('../models/canertube-channel-model');
const CanertubeTrendModel = require('../models/canertube-trend-model');
const CanertubeTopMusicModel = require('../models/canertube-top-music-model');
const CanertubeTopGameModel = require('../models/canertube-top-game-model');
const CanertubeTopSportModel = require('../models/canertube-top-sport-model');


// YOUTUBE DATA CATHİNG 
// const youtube = google.youtube({
//   version: 'v3',
//   auth: process.env.YOUTUBE_API_KEY
// });

// router.get('/', async (req, res) => {
//   try {
//     const response = await youtube.search.list({
//       part: 'snippet',
//       q: 'videos',
//       type: 'video',
//       maxResults: 1
//     });
//     const videos = response.data.items;
//     const user = req.user; // Kullanıcı bilgisi alınıyor
//     console.log('Videos Youtube : ', videos);
    
//     // Her video için detayları almak için ayrı bir API isteği yapın
//     for (let video of videos) {
//       const videoDetails = await youtube.videos.list({
//         part: 'snippet,statistics',
//         id: video.id.videoId
//       });
//       video.details = videoDetails.data.items[0];
//       console.log('video.details : ', video.details);

//       // Kanal bilgilerini almak için ayrı bir API isteği yapın
//       const channelInfo = await youtube.channels.list({
//         part: 'snippet',
//         id: video.snippet.channelId
//       });
//       video.channelInfo = channelInfo.data.items[0];
//       console.log('video.channelInfo : ', video.details);

//     }
    
//     console.log('User Google : ', user);
//     res.render('home', { title: 'CanerTube', user: user, videos: videos });
//   } catch (err) {
//     console.error('Error fetching videos:', err);
//     res.status(500).send('Sunucu hatası'); // Sunucu hatası mesajı
//   }
// });


/* GET home page. */
router.get('/', async function(req, res) {
  try {
    const user = req.user;
    ////////
    let followers = [];
    if(user) {
      const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
      if (profile) {
        followers = await FollowerModel.getFollowerListByUserID(profile);
        console.log("followers ", followers);
      } else {
        return res.status(404).json({ error: "Profile not found" });
      }
    }
    /////////
    const video = await CanertubeAllVideoModel.getAllCanertubeVideos();
    console.log('video : ' , video);
    res.render('home', { title: 'CanerTube', user: user, video: video, followers: followers });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});



//music
router.get('/music', async function(req, res) {
  try {
    const user = req.user;
    ////////
    let followers = [];
    if(user) {
      const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
      if (profile) {
        followers = await FollowerModel.getFollowerListByUserID(profile);
        console.log("followers ", followers);
      } else {
        return res.status(404).json({ error: "Profile not found" });
      }
    }
    /////////
    const video = await CanertubeMusicVideoModel.getMusicCanertubeVideos();
    res.render('music', { title: 'CanerTube', user: user , video : video, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//game
router.get('/game', async function(req, res) {
  try {
    const user = req.user;
        ////////
        let followers = [];
        if(user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
            followers = await FollowerModel.getFollowerListByUserID(profile);
            console.log("followers ", followers);
          } else {
            return res.status(404).json({ error: "Profile not found" });
          }
        }
        /////////
    const video = await CanertubeGameVideoModel.getGameCanertubeVideos();
    res.render('game', { title: 'CanerTube', user: user , video : video, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//funny
router.get('/funny', async function(req, res) {
  try {
    const user = req.user;
        ////////
        let followers = [];
        if(user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
            followers = await FollowerModel.getFollowerListByUserID(profile);
            console.log("followers ", followers);
          } else {
            return res.status(404).json({ error: "Profile not found" });
          }
        }
        /////////
    const video = await CanertubeFunnyVideoModel.getFunnyCanertubeVideos();
    res.render('funny', { title: 'CanerTube', user: user , video : video, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//education
router.get('/education', async function(req, res) {
  try {
    const user = req.user;
        ////////
        let followers = [];
        if(user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
            followers = await FollowerModel.getFollowerListByUserID(profile);
            console.log("followers ", followers);
          } else {
            return res.status(404).json({ error: "Profile not found" });
          }
        }
        /////////
    const video = await CanertubeEducationVideoModel.getEducationCanertubeVideos();
    res.render('education', { title: 'CanerTube', user: user , video : video, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//sport
router.get('/sport', async function(req, res) {
  try {
    const user = req.user;
        ////////
        let followers = [];
        if(user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
            followers = await FollowerModel.getFollowerListByUserID(profile);
            console.log("followers ", followers);
          } else {
            return res.status(404).json({ error: "Profile not found" });
          }
        }
        /////////
    const video = await CanertubeSportVideoModel.getSportCanertubeVideos();
    res.render('sport', { title: 'CanerTube', user: user , video : video, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//news
router.get('/news', async function(req, res) {
  try {
    const user = req.user;
        ////////
        let followers = [];
        if(user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
            followers = await FollowerModel.getFollowerListByUserID(profile);
            console.log("followers ", followers);
          } else {
            return res.status(404).json({ error: "Profile not found" });
          }
        }
        /////////
    const video = await CanertubeNewsVideoModel.getNewsCanertubeVideos();
    res.render('news', { title: 'CanerTube', user: user , video : video, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//beauty
router.get('/beauty', async function(req, res) {
  try {
    const user = req.user;
        ////////
        let followers = [];
        if(user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
            followers = await FollowerModel.getFollowerListByUserID(profile);
            console.log("followers ", followers);
          } else {
            return res.status(404).json({ error: "Profile not found" });
          }
        }
        /////////
    const video = await CanertubeBeautyVideoModel.getBeautyCanertubeVideos();
    res.render('beauty', { title: 'CanerTube', user: user , video : video, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//food
router.get('/food', async function(req, res) {
  try {
    const user = req.user;
        ////////
        let followers = [];
        if(user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
            followers = await FollowerModel.getFollowerListByUserID(profile);
            console.log("followers ", followers);
          } else {
            return res.status(404).json({ error: "Profile not found" });
          }
        }
        /////////
    const video = await CanertubeFoodVideoModel.getFoodCanertubeVideos();
    res.render('food', { title: 'CanerTube', user: user , video : video, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//science
router.get('/science', async function(req, res) {
  try {
    const user = req.user;
        ////////
        let followers = [];
        if(user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
            followers = await FollowerModel.getFollowerListByUserID(profile);
            console.log("followers ", followers);
          } else {
            return res.status(404).json({ error: "Profile not found" });
          }
        }
        /////////
    const video = await CanertubeScienceVideoModel.getScienceCanertubeVideos();
    res.render('science', { title: 'CanerTube', user: user , video : video, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//trip
router.get('/trip', async function(req, res) {
  try {
    const user = req.user;
        ////////
        let followers = [];
        if(user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
            followers = await FollowerModel.getFollowerListByUserID(profile);
            console.log("followers ", followers);
          } else {
            return res.status(404).json({ error: "Profile not found" });
          }
        }
        /////////
    const video = await CanertubeTripVideoModel.getTripCanertubeVideos();
    res.render('trip', { title: 'CanerTube', user: user , video : video, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
// Shorts
router.get('/shorts', async function(req, res) {
  try {
    const user = req.user;
        ////////
        let followers = [];
        if(user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
            followers = await FollowerModel.getFollowerListByUserID(profile);
            console.log("followers ", followers);
          } else {
            return res.status(404).json({ error: "Profile not found" });
          }
        }
        /////////
    const shorts = await CanertubeShortModel.getCanertubeShorts();
    res.render('shorts', { title: 'CanerTube', user: user , shorts : shorts, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
// Subscriptions
router.get('/subscriptions', async function(req, res) {
  try {
    const user = req.user;
        ////////
        let followers = [];
        if(user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
            followers = await FollowerModel.getFollowerListByUserID(profile);
            console.log("followers ", followers);
          } else {
            return res.status(404).json({ error: "Profile not found" });
          }
        }
        /////////
    const video = await CanertubeAllVideoModel.getAllCanertubeVideos();
    res.render('subscriptions', { title: 'CanerTube', user: user , video : video, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
// Channel-home
router.get('/channel', async function(req, res) {
  try {
    const user = req.user;

    let profile = []; // profile değişkenini tanımlıyoruz
    let followers = [];

    if (user) {
      profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
      console.log("profile ", profile);
      if (profile) {
        followers = await FollowerModel.getFollowerListByUserID(profile);
      } else {
        return res.status(404).json({ error: "Profile not found" });
      }
    }

    res.render('channel', { title: 'CanerTube', profile: profile, user:user,followers: followers });
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//
router.get('/user-channel/:userId', async function(req, res) {
  try {
    const user = req.user;
    let profile = []; // profile değişkenini tanımlıyoruz
    let followers = [];
    let channel = [];
    const userId = req.params.userId; // Get the userId from the route parameter
    let videos = [];
    if (user) {
      profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);

      if (profile) {
        followers = await FollowerModel.getFollowerListByUserID(profile);
        channel = await CanertubeChannelModel.getCanertubeChannelByUserID(userId);
        videos = await CanertubeChannelModel.getCanertubeChannelVideosByUserID(userId);
        console.log('Videos : ', videos);
      } else {
        return res.status(404).json({ error: "Profile not found" });
      }
    }

    res.render('user-channel', { title: 'CanerTube', user:user,followers: followers , videos:videos ,channel : channel});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
// Channel-playlist
router.get('/channel-playlist', async function(req, res) {
  try {
    const user = req.user;

    let profile = []; // profile değişkenini tanımlıyoruz
    let followers = [];
    let list =[];
    if (user) {
      profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
      console.log("profile ", profile);
      if (profile) {
        followers = await FollowerModel.getFollowerListByUserID(profile);
        list = await WatchListModel.getWatchListByUserID(profile);

      } else {
        return res.status(404).json({ error: "Profile not found" });
      }
    }

    res.render('channel-playlist', { title: 'CanerTube', profile: profile, user:user,followers: followers, list:list });
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//TREND VİDEOS 
// Channel-commmunity
router.get('/trend-videos', async function(req, res) {
  try {
    const user = req.user;
    let trends = [];
    let profile = []; // profile değişkenini tanımlıyoruz
    let followers = [];

    if (user) {
      profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
      console.log("profile ", profile);
      if (profile) {
        followers = await FollowerModel.getFollowerListByUserID(profile);
      } else {
        return res.status(404).json({ error: "Profile not found" });
      }
    }
    trends = await CanertubeTrendModel.getTrendCanertubeVideos();
    console.log('TRENDS : ' , trends);
    res.render('trend', { title: 'CanerTube', profile: profile, user:user,followers: followers , trends:trends });
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
// TOP MUSIC 
router.get('/music-videos', async function(req, res) {
  try {
    const user = req.user;
    let musics = [];
    let profile = []; // profile değişkenini tanımlıyoruz
    let followers = [];

    if (user) {
      profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
      console.log("profile ", profile);
      if (profile) {
        followers = await FollowerModel.getFollowerListByUserID(profile);
      } else {
        return res.status(404).json({ error: "Profile not found" });
      }
    }
    musics = await CanertubeTopMusicModel.getTopMusicCanertubeVideos();
    console.log('musics : ' , musics);
    res.render('music-videos', { title: 'CanerTube', profile: profile, user:user,followers: followers , musics:musics });
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
// TOP GAME 
router.get('/game-videos', async function(req, res) {
  try {
    const user = req.user;
    let games = [];
    let profile = []; // profile değişkenini tanımlıyoruz
    let followers = [];

    if (user) {
      profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
      console.log("profile ", profile);
      if (profile) {
        followers = await FollowerModel.getFollowerListByUserID(profile);
      } else {
        return res.status(404).json({ error: "Profile not found" });
      }
    }
    games = await CanertubeTopGameModel.getTopGameCanertubeVideos();
    console.log('games : ' , games);
    res.render('game-videos', { title: 'CanerTube', profile: profile, user:user,followers: followers , games:games });
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
// TOP SPORT 
router.get('/sport-videos', async function(req, res) {
  try {
    const user = req.user;
    let sports = [];
    let profile = []; // profile değişkenini tanımlıyoruz
    let followers = [];

    if (user) {
      profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
      console.log("profile ", profile);
      if (profile) {
        followers = await FollowerModel.getFollowerListByUserID(profile);
      } else {
        return res.status(404).json({ error: "Profile not found" });
      }
    }
    sports = await CanertubeTopSportModel.getTopSportCanertubeVideos();
    console.log('sports : ' , sports);
    res.render('sport-videos', { title: 'CanerTube', profile: profile, user:user,followers: followers , sports:sports });
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
// Channel-commmunity
router.get('/channel-community', async function(req, res) {
  try {
    const user = req.user;

    let profile = []; // profile değişkenini tanımlıyoruz
    let followers = [];

    if (user) {
      profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
      console.log("profile ", profile);
      if (profile) {
        followers = await FollowerModel.getFollowerListByUserID(profile);
      } else {
        return res.status(404).json({ error: "Profile not found" });
      }
    }

    res.render('channel-community', { title: 'CanerTube', profile: profile, user:user,followers: followers });
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});

// downloads
router.get('/downloads', async function(req, res) {
  try {
    const user = req.user;
        ////////
        let followers = [];
        if(user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
            followers = await FollowerModel.getFollowerListByUserID(profile);
            console.log("followers ", followers);
          } else {
            return res.status(404).json({ error: "Profile not found" });
          }
        }
        /////////
    res.render('downloads', { title: 'CanerTube', user: user , followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
// watch-history
router.get('/watch-history', async function(req, res) {
  try {
    const user = req.user;

    let profile = []; // profile değişkenini tanımlıyoruz
    let followers = [];
    let history = [];
    if (user) {
      profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
      if (profile) {
        followers = await FollowerModel.getFollowerListByUserID(profile);
        const userId = profile[0].user_id;
        history = await WatchHistoryModel.getWatchHistoryByUserID(userId);
        console.log('History : ' , history);
      } else {
        return res.status(404).json({ error: "Profile not found" });
      }
    }

    res.render('history', { title: 'CanerTube', profile: profile, user:user, followers: followers  , history : history});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//watch - list 
router.get('/watch-list', async function(req, res) {
  try {
    const user = req.user;
    let list = [];
    let profile = [];
    let followers = [];
    if (user) {
       profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
       list = await WatchListModel.getWatchListByUserID(profile);
       console.log(' LİSTE : ' , list);
       followers = await FollowerModel.getFollowerListByUserID(profile);
    }
    res.render('list', { title: 'CanerTube', user: user,   list:list  , profile:profile, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
// watch later 
router.get('/watch-later', async function(req, res) {
  try {
    const user = req.user;
    let later ={ videos: [], totalCountLater: 0 }; 
    let profile = [];
    let followers = [];
    if (user) {
       profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
       later = await WatchLaterModel.getWatchLaterByUserID(profile);
       console.log('LATER : ' , later);
       followers = await FollowerModel.getFollowerListByUserID(profile);
    }
    res.render('later', { title: 'CanerTube', user: user, later:later, profile:profile, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//watch-likes
router.get('/watch-likes', async function(req, res) {
  try {
    const user = req.user;
    let likes = { videos: [], totalCountLike: 0 }; // Initialize likes object
    let profile = [];
    let followers = [];
    if (user) {
       profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
       likes = await WatchLikesModel.getWatchLikesByUserID(profile);
       console.log('LİKES : ' , likes);
       followers = await FollowerModel.getFollowerListByUserID(profile);

    }
    res.render('likes', { title: 'CanerTube', user: user , likes: likes , profile:profile, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
// you
router.get('/watchlist' , WatchListController.getWatchListByUserIDController)

router.get('/person' , CanertubeUserController.getCanertubeUserByDisplayNameController);

router.get('/watch-history' , WatchHistoryController.getWatchHistoryController)

router.get('/you', async function(req, res) {
  try {
    const user = req.user;
    let list = [];
    let history = [];
    let later ={ videos: [], totalCountLater: 0 }; 
    let likes = { videos: [], totalCountLike: 0 }; // Initialize likes object
    let profile = [];
    let followers = [];
    if (user) {
       profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
       list = await WatchListModel.getWatchListByUserID(profile);
       history = await WatchHistoryModel.getWatchHistoryByUserID(profile[0].user_id);
       later = await WatchLaterModel.getWatchLaterByUserID(profile);
       likes = await WatchLikesModel.getWatchLikesByUserID(profile);
       followers = await FollowerModel.getFollowerListByUserID(profile);

    }
    res.render('you', { title: 'CanerTube', user: user, history: history,  list:list , later:later , likes: likes , profile:profile, followers: followers});
  } catch (error) {
    console.error('Error : ', error);
    res.status(500).send('Internal Server Error');
  }
});
//Movie Detail 
router.get('/video-detail/:videoId' , async function (req, res ){
  try {
    const user = req.user;
    let followers = [];
    const videoId = req.params.videoId;
    if (user) {
        const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
        
        if (profile) {
          followers = await FollowerModel.getFollowerListByUserID(profile);
          const videoData = { video_id: videoId , user_id: profile[0].user_id }
           const addHistory = await WatchHistoryModel.addWatchHistory(videoData);
            console.log('Add History : ' , addHistory);
        } else {
            return res.status(404).json({ error: "Profile not found" });
        }
    }

    const video = await VideoDetailModel.getVideoDetailByVideoID(videoId);

    const comment = await VideoCommentModel.getVideoCommentByVideoID(videoId);
    console.log("Comment : " , comment);
    const recommend = await CanertubeAllVideoModel.getAllCanertubeVideos();
    const recommendFilter = recommend.filter(item => item.video_id !== parseInt(videoId) && item.video_id !== video.video_id);

    res.render('video-detail', {
        title: 'Caner Film',
        video: video,
        user:user,
        followers:followers,
        recommend : recommendFilter,
        comment : comment
    });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
}
}); 
//SEARCH 
router.post('/search-video', async function (req, res) {
  try {
      const query = req.body.query;
      console.log('Request Body : ', query);
      const video = await SearchVideoModel.getSearchedVideo(query);
      console.log('videos : ', video);

      // Assuming you are using express-session middleware
      req.session.searchedVideos = video;

      res.json({ success: true });
  } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
  }
});

router.get('/searched-videos', async function(req, res) {
  try {
      const user = req.user;
      let followers = [];
      if (user) {
          const profile = await CanertubeUserModel.getCanertubeUserByDisplayName(user);
          if (profile) {
              followers = await FollowerModel.getFollowerListByUserID(profile);
          } else {
              return res.status(404).json({ error: "Profile not found" });
          }
      }

      // Retrieve videos from session
      const video = req.session.searchedVideos || [];

      res.render('searched-videos', {
          title: 'CanerTube',
          user: user,
          video: video,
          followers: followers
      });
  } catch (error) {
      console.error('Error : ', error);
      res.status(500).send('Internal Server Error');
  }
});


// Google ile oturum açma rotası
router.get('/auth/google',
  passport.authenticate('google', { 
    scope: ['profile', 'email'] 
  }));
// Google tarafından geri yönlendirme rotası
router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  async function(req, res) {
    try {
      console.log("Google verileri:", req.user);
      await GoogleUserController.checkGoogleUserSituation(req, res); 
    } catch (error) {
      console.error('Google verilerini eklerken bir hata oluştu:', error);
      res.redirect('/error');
    }
  });

module.exports = router;
