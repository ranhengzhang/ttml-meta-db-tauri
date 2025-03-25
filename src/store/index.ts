import { defineStore } from 'pinia'

// // 显式定义初始状态
// const initialState: {artists: Artist[], albums: Album[], tracks: Track[]} = {"albums":[{"artists":["84de9af7-4e5d-49d8-b568-0583905ec99c"],"metas":["アイコトバ","暗号","アイコトバ - EP","Aikotoba - EP","アイコトバ(通常盤)"],"tracks":["d5ea40fd-938c-43fd-b35e-2424928f5c92"],"uuid":"1326e74b-a6fd-4d7d-a788-e45fe60df5c9"},{"artists":["84de9af7-4e5d-49d8-b568-0583905ec99c"],"metas":["アイコトバ (期間生産限定盤)"],"tracks":["d5ea40fd-938c-43fd-b35e-2424928f5c92"],"uuid":"337ac378-06e6-4a2c-af85-16807718bf0d"},{"artists":["84de9af7-4e5d-49d8-b568-0583905ec99c"],"metas":["MIRAI (期間生産限定アニメ盤)"],"tracks":["4f659808-9f03-4691-8cb9-944fae0e2683"],"uuid":"69ae6d13-a0ff-4a97-8ac0-71c0e622b02d"},{"artists":["84de9af7-4e5d-49d8-b568-0583905ec99c"],"metas":["響喜乱舞","响喜乱舞","Kyoukiranbu"],"tracks":["dfd666e9-13b6-42d7-8637-e47aca38e0d6","4f659808-9f03-4691-8cb9-944fae0e2683","d5ea40fd-938c-43fd-b35e-2424928f5c92","5d429146-d530-478a-99ed-a0ff32a10e1a","88b263c3-704c-4abc-80c2-c76086d1f282"],"uuid":"6d398581-b085-48ec-acd5-70c9920de9eb"},{"artists":["84de9af7-4e5d-49d8-b568-0583905ec99c"],"metas":["G.R.N.D."],"tracks":["d5ea40fd-938c-43fd-b35e-2424928f5c92","5d429146-d530-478a-99ed-a0ff32a10e1a"],"uuid":"73fb3ee5-2e36-4009-bf5c-b51bb957c624"},{"artists":["84de9af7-4e5d-49d8-b568-0583905ec99c"],"metas":["GARNiDELiA BEST"],"tracks":["88b263c3-704c-4abc-80c2-c76086d1f282"],"uuid":"820e548c-66bf-4a12-864c-e886c1e092b3"},{"artists":["84de9af7-4e5d-49d8-b568-0583905ec99c"],"metas":["MIRAI","未来","MIRAI - EP","Mirai - EP"],"tracks":["6df7db2e-1000-4797-a44d-55cf3fcc9fa7"],"uuid":"a3d98cd0-f72d-427d-9803-7f4968f3655e"},{"artists":["84de9af7-4e5d-49d8-b568-0583905ec99c"],"metas":["Violet Cry"],"tracks":["88b263c3-704c-4abc-80c2-c76086d1f282"],"uuid":"af3abff3-16d2-4887-887b-61080d7e866c"},{"artists":[],"metas":[],"tracks":[],"uuid":"b8bbc073-217c-49a9-af20-bf7512ce26d3"},{"artists":["138c33e1-7c9d-4022-882f-1ef6d2fb2d03"],"metas":["ドリームCD BOX"],"tracks":["f0555c98-a3c4-485b-9c63-159d38325b7c"],"uuid":"d395e94c-b75d-4298-ab91-930f1d71efad"},{"artists":["84de9af7-4e5d-49d8-b568-0583905ec99c"],"metas":["約束 -Promise code-","约定 -Promise code-","約束 -Promise code- - EP","Promise Code - EP"],"tracks":["88b263c3-704c-4abc-80c2-c76086d1f282"],"uuid":"d410482a-7fee-4440-a4fd-f90eee4dd243"},{"artists":["84de9af7-4e5d-49d8-b568-0583905ec99c"],"metas":["Linkage Ring"],"tracks":["dfd666e9-13b6-42d7-8637-e47aca38e0d6"],"uuid":"d68f012f-ec80-4b15-9591-442640ca9279"},{"artists":[],"metas":[],"tracks":[],"uuid":"dd4fc301-548a-4ff0-bdb5-5adc21fdbd15"},{"artists":["84de9af7-4e5d-49d8-b568-0583905ec99c"],"metas":["約束 -Promise code- (期間生産限定アニメ盤)"],"tracks":["88b263c3-704c-4abc-80c2-c76086d1f282"],"uuid":"f71ffa44-1cd3-4e3f-88dc-7b069e3647f3"},{"artists":[],"metas":[],"tracks":[],"uuid":"fa137e9f-6d66-44cf-bbe7-07d1540b73f0"}],"artists":[{"albums":["d395e94c-b75d-4298-ab91-930f1d71efad"],"metas":["布施明","ふせ あきら","Akira Fuse","a","b","c","d","e","f"],"uuid":"138c33e1-7c9d-4022-882f-1ef6d2fb2d03"},{"albums":["6d398581-b085-48ec-acd5-70c9920de9eb","d68f012f-ec80-4b15-9591-442640ca9279","a3d98cd0-f72d-427d-9803-7f4968f3655e","69ae6d13-a0ff-4a97-8ac0-71c0e622b02d","73fb3ee5-2e36-4009-bf5c-b51bb957c624","1326e74b-a6fd-4d7d-a788-e45fe60df5c9","337ac378-06e6-4a2c-af85-16807718bf0d","d410482a-7fee-4440-a4fd-f90eee4dd243","820e548c-66bf-4a12-864c-e886c1e092b3","af3abff3-16d2-4887-887b-61080d7e866c","f71ffa44-1cd3-4e3f-88dc-7b069e3647f3"],"metas":["GARNiDELiA","ガルニデリア","加尼德里亚"],"uuid":"84de9af7-4e5d-49d8-b568-0583905ec99c"}],"tracks":[{"albums":["6d398581-b085-48ec-acd5-70c9920de9eb","69ae6d13-a0ff-4a97-8ac0-71c0e622b02d"],"feats":[],"ids":[{"key":"spotifyId","value":"4RxEbZFmQrO7HoOkagrmiA"},{"key":"ncmMusicId","value":"1347683971"},{"key":"ncmMusicId","value":"1311758712"},{"key":"qqMusicId","value":"217447633"},{"key":"appleMusicId","value":"1537901353"},{"key":"isrc","value":"JPU901501080"}],"metas":["PiNKCAT","Pink Cat"],"uuid":"4f659808-9f03-4691-8cb9-944fae0e2683"},{"albums":["6d398581-b085-48ec-acd5-70c9920de9eb","73fb3ee5-2e36-4009-bf5c-b51bb957c624"],"feats":[],"ids":[{"key":"ncmMusicId","value":"547969272"},{"key":"ncmMusicId","value":"1311759661"},{"key":"qqMusicId","value":"213290345"},{"key":"qqMusicId","value":"217447635"},{"key":"spotifyId","value":"2uitD3swMlf4mBqGGKzsjt"},{"key":"spotifyId","value":"4AXnoDLEmU5eH8ODXa1fkL"},{"key":"appleMusicId","value":"1538285702"},{"key":"appleMusicId","value":"1537901355"},{"key":"isrc","value":"JPU901800696"}],"metas":["桃源恋歌","Tougen Renka"],"uuid":"5d429146-d530-478a-99ed-a0ff32a10e1a"},{"albums":["a3d98cd0-f72d-427d-9803-7f4968f3655e"],"feats":[],"ids":[{"key":"ncmMusicId","value":"31917314"},{"key":"qqMusicId","value":"102343124"},{"key":"appleMusicId","value":"1536157864"},{"key":"isrc","value":"JPU901501080"},{"key":"spotifyId","value":"753RThnRJWREk61vZZL4bn"}],"metas":["PiNK CAT","Pink Cat"],"uuid":"6df7db2e-1000-4797-a44d-55cf3fcc9fa7"},{"albums":["6d398581-b085-48ec-acd5-70c9920de9eb","d410482a-7fee-4440-a4fd-f90eee4dd243","820e548c-66bf-4a12-864c-e886c1e092b3","af3abff3-16d2-4887-887b-61080d7e866c","f71ffa44-1cd3-4e3f-88dc-7b069e3647f3"],"feats":[],"ids":[{"key":"ncmMusicId","value":"411907897"},{"key":"ncmMusicId","value":"1347682802"},{"key":"ncmMusicId","value":"446875490"},{"key":"ncmMusicId","value":"1311758713"},{"key":"ncmMusicId","value":"1407263626"},{"key":"qqMusicId","value":"107870320"},{"key":"qqMusicId","value":"109493978"},{"key":"qqMusicId","value":"217447636"},{"key":"qqMusicId","value":"246294028"},{"key":"spotifyId","value":"46FHLduvXJ9rQN2XUeQccw"},{"key":"spotifyId","value":"3iSJKB4yhf5nR6grmkP9VO"},{"key":"spotifyId","value":"4XEGGHFq9N4RETN11sP0Yv"},{"key":"spotifyId","value":"4WvsFKwD3unzEYflVXqZs3"},{"key":"appleMusicId","value":"1538258373"},{"key":"appleMusicId","value":"1538259288"},{"key":"appleMusicId","value":"1537901356"},{"key":"appleMusicId","value":"1537904732"},{"key":"isrc","value":"JPU901601989"}],"metas":["極楽浄土","极乐净土","游戏《阴阳师》宣传曲","NetEaseアプリゲーム「陰陽師」キャンペーン用テーマソング","Gokuraku Joudo"],"uuid":"88b263c3-704c-4abc-80c2-c76086d1f282"},{"albums":["6d398581-b085-48ec-acd5-70c9920de9eb","73fb3ee5-2e36-4009-bf5c-b51bb957c624","1326e74b-a6fd-4d7d-a788-e45fe60df5c9","337ac378-06e6-4a2c-af85-16807718bf0d"],"feats":[],"ids":[{"key":"ncmMusicId","value":"516735801"},{"key":"ncmMusicId","value":"516320215"},{"key":"ncmMusicId","value":"547971273"},{"key":"ncmMusicId","value":"1311759660"},{"key":"qqMusicId","value":"275950185"},{"key":"qqMusicId","value":"204444580"},{"key":"qqMusicId","value":"213290342"},{"key":"qqMusicId","value":"217447634"},{"key":"spotifyId","value":"4dlm94KUT8Txn5rde9tAMq"},{"key":"spotifyId","value":"6d9PPudp2QzTa3ATVnPSXX"},{"key":"spotifyId","value":"1a3PONGPi0IPNKMYIb99qC"},{"key":"appleMusicId","value":"1537899466"},{"key":"appleMusicId","value":"1538285699"},{"key":"appleMusicId","value":"1537901354"},{"key":"isrc","value":"JPU901703085"}],"metas":["Hysteric Bullet","《枪娘！FIRE》动画日语版片头曲"],"uuid":"d5ea40fd-938c-43fd-b35e-2424928f5c92"},{"albums":["6d398581-b085-48ec-acd5-70c9920de9eb","d68f012f-ec80-4b15-9591-442640ca9279"],"feats":[],"ids":[{"key":"ncmMusicId","value":"1311758711"},{"key":"ncmMusicId","value":"30245467"},{"key":"qqMusicId","value":"217447632"},{"key":"qqMusicId","value":"101834590"},{"key":"appleMusicId","value":"1538125038"},{"key":"appleMusicId","value":"1537901352"},{"key":"spotifyId","value":"1meMngqArloEq0rTooYE35"},{"key":"spotifyId","value":"6A6HAimhnm0EaogJLcHTiP"},{"key":"isrc","value":"JPU901402454"}],"metas":["Lamb.","Lamb"],"uuid":"dfd666e9-13b6-42d7-8637-e47aca38e0d6"},{"albums":["d395e94c-b75d-4298-ab91-930f1d71efad"],"feats":[],"ids":[{"key":"ncmMusicId","value":"22733413"},{"key":"qqMusicId","value":"235637732"}],"metas":["君は薔薇より美しい","你比蔷薇更美","Kimi wa Bara yori Utsukushii"],"uuid":"f0555c98-a3c4-485b-9c63-159d38325b7c"}]}
// export const useDatabaseStore = defineStore('database', {
//     state: ()=>(initialState)
// })

export const useRecentStore = defineStore('recent', {
    state: ()=>({
        'artist': 0,
        'album': 0,
        'track': 0,
    })
})