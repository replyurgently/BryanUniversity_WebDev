//what is an object .... what objects have we seen containing data while getting things from an API
const uuid = require("uuid");
//a method is a function set as a property of an object that enacts itself UPON the object itself
module.exports = [
  {
    created_at: "Mon May 06 20:01:29 +0000 2019",
    _id: uuid.v4(),
    text:
      "Today's new update means that you can finally add Pizza Cat to your Retweet with comments! Learn more about this ne… https://t.co/Rbc9TF2s5X",
    truncated: true,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: [
        {
          url: "https://t.co/Rbc9TF2s5X",
          expanded_url: "https://twitter.com/i/web/status/1125490788736032770",
          display_url: "twitter.com/i/web/status/1…",
          indices: [117, 140]
        }
      ]
    },
    metadata: {
      iso_language_code: "en",
      result_type: "recent"
    },
    source:
      '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      _id: uuid.v4(),
      name: "Twitter Dev",
      screen_name: "TwitterDev",
      location: "Internet",
      description:
        "Your official source for Twitter Platform news, updates & events. Need technical help? Visit https://t.co/mGHnxZU8c1 ⌨️ #TapIntoTwitter",
      url: "https://t.co/FGl7VOULyL",
      entities: {
        url: {
          urls: [
            {
              url: "https://t.co/FGl7VOULyL",
              expanded_url: "https://developer.twitter.com/",
              display_url: "developer.twitter.com",
              indices: [0, 23]
            }
          ]
        },
        description: {
          urls: [
            {
              url: "https://t.co/mGHnxZU8c1",
              expanded_url: "https://twittercommunity.com/",
              display_url: "twittercommunity.com",
              indices: [93, 116]
            }
          ]
        }
      },
      protected: false,
      followers_count: 501947,
      friends_count: 1473,
      listed_count: 1507,
      created_at: "Sat Dec 14 04:35:55 +0000 2013",
      favourites_count: 2186,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: true,
      statuses_count: 3389,
      lang: "en",
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: null,
      profile_background_color: null,
      profile_background_image_url: null,
      profile_background_image_url_https: null,
      profile_background_tile: null,
      profile_image_url: null,
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/880136122604507136/xHrnqf1T_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/2244994945/1498675817",
      profile_link_color: null,
      profile_sidebar_border_color: null,
      profile_sidebar_fill_color: null,
      profile_text_color: null,
      profile_use_background_image: null,
      has_extended_profile: null,
      default_profile: false,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: null
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: true,
    quoted_status: {
      created_at: "Mon May 06 19:14:46 +0000 2019",
      _id: uuid.v4(),
      text:
        "It's easy to express yourself by Retweeting with a comment. What if you could take it a step further and include me… https://t.co/YTqpNZZ8M9",
      truncated: true,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [
          {
            url: "https://t.co/YTqpNZZ8M9",
            expanded_url:
              "https://twitter.com/i/web/status/1125479034513645569",
            display_url: "twitter.com/i/web/status/1…",
            indices: [117, 140]
          }
        ]
      },
      metadata: {
        iso_language_code: "en",
        result_type: "recent"
      },
      source:
        '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        _id: uuid.v4(),
        name: "Twitter Support",
        screen_name: "TwitterSupport",
        location: "Twitter HQ",
        description:
          "Your official source for Twitter Support. We're available 24/7 via Direct Message to answer account questions. Follow us for tips, tricks, and announcements.",
        url: "https://t.co/heEvRrl4yN",
        entities: {
          url: {
            urls: [
              {
                url: "https://t.co/heEvRrl4yN",
                expanded_url: "https://help.twitter.com",
                display_url: "help.twitter.com",
                indices: [0, 23]
              }
            ]
          },
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 5861908,
        friends_count: 17,
        listed_count: 15129,
        created_at: "Thu Dec 04 18:51:57 +0000 2008",
        favourites_count: 313,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: true,
        statuses_count: 27955,
        lang: "en",
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: null,
        profile_background_color: null,
        profile_background_image_url: null,
        profile_background_image_url_https: null,
        profile_background_tile: null,
        profile_image_url: null,
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/941807338171777025/PRP6vwDq_normal.jpg",
        profile_banner_url:
          "https://pbs.twimg.com/profile_banners/17874544/1499274456",
        profile_link_color: null,
        profile_sidebar_border_color: null,
        profile_sidebar_fill_color: null,
        profile_text_color: null,
        profile_use_background_image: null,
        has_extended_profile: null,
        default_profile: false,
        default_profile_image: false,
        following: false,
        follow_request_sent: false,
        notifications: false,
        translator_type: null
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 1466,
      favorite_count: 3990,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: "en"
    },
    retweet_count: 20,
    favorite_count: 44,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: "en"
  },
  {
    created_at: "Sat May 04 15:00:33 +0000 2019",
    _id: uuid.v4(),
    text:
      "If you're at #Pycon2019 and you use Twitter data or the Twitter API with your code, we are running an Open Space in… https://t.co/mVLIzEr9Gx",
    truncated: true,
    entities: {
      hashtags: [
        {
          text: "Pycon2019",
          indices: [13, 23]
        }
      ],
      symbols: [],
      user_mentions: [],
      urls: [
        {
          url: "https://t.co/mVLIzEr9Gx",
          expanded_url: "https://twitter.com/i/web/status/1124690280777699328",
          display_url: "twitter.com/i/web/status/1…",
          indices: [117, 140]
        }
      ]
    },
    metadata: {
      iso_language_code: "en",
      result_type: "recent"
    },
    source:
      '<a href="http://twitter.com" rel="nofollow">Twitter for  iPhone</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      _id: uuid.v4(),
      name: "Twitter Dev",
      screen_name: "TwitterDev",
      location: "Internet",
      description:
        "Your official source for Twitter Platform news, updates & events. Need technical help? Visit https://t.co/mGHnxZU8c1 ⌨️ #TapIntoTwitter",
      url: "https://t.co/FGl7VOULyL",
      entities: {
        url: {
          urls: [
            {
              url: "https://t.co/FGl7VOULyL",
              expanded_url: "https://developer.twitter.com/",
              display_url: "developer.twitter.com",
              indices: [0, 23]
            }
          ]
        },
        description: {
          urls: [
            {
              url: "https://t.co/mGHnxZU8c1",
              expanded_url: "https://twittercommunity.com/",
              display_url: "twittercommunity.com",
              indices: [93, 116]
            }
          ]
        }
      },
      protected: false,
      followers_count: 501947,
      friends_count: 1473,
      listed_count: 1507,
      created_at: "Sat Dec 14 04:35:55 +0000 2013",
      favourites_count: 2186,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: true,
      statuses_count: 3389,
      lang: "en",
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: null,
      profile_background_color: null,
      profile_background_image_url: null,
      profile_background_image_url_https: null,
      profile_background_tile: null,
      profile_image_url: null,
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/880136122604507136/xHrnqf1T_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/2244994945/1498675817",
      profile_link_color: null,
      profile_sidebar_border_color: null,
      profile_sidebar_fill_color: null,
      profile_text_color: null,
      profile_use_background_image: null,
      has_extended_profile: null,
      default_profile: false,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: null
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 12,
    favorite_count: 27,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: "en"
  },
  {
    created_at: "Mon Mar 29 15:35:18 +0000 2010",
    _id: uuid.v4(),
    text: "@harashoskas おやすみー！またね！",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: "harashoskas",
          name: "ごろね",
          _id: uuid.v4(),
          indices: [0, 12]
        }
      ],
      urls: []
    },
    source:
      '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_screen_name: "harashoskas",
    user: {
      _id: uuid.v4(),
      name: "ライラ",
      screen_name: "lyla_bot",
      location: "イベリア半島",
      description:
        "SoundHorizonマキシシングル【聖戦のイベリア】に登場する焔と契りし少女（ライラ）の非公式自動botです。詳しくは上記URLを参照ください。（制作者 @Cy666）",
      url: "http://t.co/neI0o3E58n",
      entities: {
        url: {
          urls: [
            {
              url: "http://t.co/neI0o3E58n",
              expanded_url: "http://cy666-lab.com/bot/bot-tutorial3/",
              display_url: "cy666-lab.com/bot/bot-tutori…",
              indices: [0, 22]
            }
          ]
        },
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 1612,
      friends_count: 2387,
      listed_count: 154,
      created_at: "Thu Dec 03 03:39:43 +0000 2009",
      favourites_count: 0,
      utc_offset: null,
      time_zone: null,
      geo_enabled: false,
      verified: false,
      statuses_count: 63471,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "C9063D",
      profile_background_image_url:
        "http://abs.twimg.com/images/themes/theme17/bg.gif",
      profile_background_image_url_https:
        "https://abs.twimg.com/images/themes/theme17/bg.gif",
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1842867121/lyla_box_normal.png",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1842867121/lyla_box_normal.png",
      profile_link_color: "FF6699",
      profile_sidebar_border_color: "DBE9ED",
      profile_sidebar_fill_color: "E00000",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      can_media_tag: true,
      followed_by: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "none"
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: "ja"
  },
  {
    created_at: "Tue Mar 21 20:50:14 +0000 2006",
    _id: uuid.v4(),
    text: "just setting up my twttr",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: []
    },
    source:
      '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      _id: uuid.v4(),
      name: "jack 🌍🌏🌎",
      screen_name: "jack",
      location: "",
      description: "#bitcoin",
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 4387817,
      friends_count: 4277,
      listed_count: 28311,
      created_at: "Tue Mar 21 20:50:14 +0000 2006",
      favourites_count: 26434,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: true,
      statuses_count: 26511,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "EBEBEB",
      profile_background_image_url:
        "http://abs.twimg.com/images/themes/theme7/bg.gif",
      profile_background_image_url_https:
        "https://abs.twimg.com/images/themes/theme7/bg.gif",
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1115644092329758721/AFjOr-K8_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1115644092329758721/AFjOr-K8_normal.jpg",
      profile_banner_url: "https://pbs.twimg.com/profile_banners/12/1483046077",
      profile_link_color: "990000",
      profile_sidebar_border_color: "DFDFDF",
      profile_sidebar_fill_color: "F3F3F3",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: false,
      default_profile_image: false,
      can_media_tag: true,
      followed_by: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "regular"
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 114499,
    favorite_count: 123029,
    favorited: false,
    retweeted: false,
    lang: "en"
  },
  {
    created_at: "Mon Mar 29 15:35:18 +0000 2010",
    _id: uuid.v4(),
    text:
      "Veja: Novo Clipe Stefhany  Falem de mim - Novo Clipe Stefhany  Falem de mim – Conseguiram de tanto fazer piada com ... http://ow.ly/16V8eH",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: []
    },
    source:
      '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      _id: uuid.v4(),
      name: "Guilherme Yoki",
      screen_name: "Gui0_q",
      location: "",
      description: "",
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 55,
      friends_count: 817,
      listed_count: 2,
      created_at: "Thu Dec 10 16:12:34 +0000 2009",
      favourites_count: 0,
      utc_offset: null,
      time_zone: null,
      geo_enabled: false,
      verified: false,
      statuses_count: 3603,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "C0DEED",
      profile_background_image_url:
        "http://abs.twimg.com/images/themes/theme1/bg.png",
      profile_background_image_url_https:
        "https://abs.twimg.com/images/themes/theme1/bg.png",
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/568189390/funny-pictures-hamster-has-a-corn_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/568189390/funny-pictures-hamster-has-a-corn_normal.jpg",
      profile_link_color: "1DA1F2",
      profile_sidebar_border_color: "C0DEED",
      profile_sidebar_fill_color: "DDEEF6",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: false,
      default_profile: true,
      default_profile_image: false,
      can_media_tag: true,
      followed_by: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: "none"
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: "pt"
  }
];
