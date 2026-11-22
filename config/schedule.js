window.TRIP_DATA = window.TRIP_DATA || {};
window.TRIP_DATA.schedule = {
  "lead": "あかりん支部長より：お久しぶりです！暑さは落ち着いてきましたが、いかがお過ごしでしょうか。2月にインド行きませんか🔥",
  "days": [
    {
      "date": "2027-02-19",
      "title": "ニューデリーからバラナシへ",
      "items": [
        {
          "time": "20:20",
          "title": "デリー空港到着",
          "transport": "飛行機",
          "mapQuery": "Indira Gandhi International Airport"
        },
        {
          "time": "21:00",
          "endTime": "21:40",
          "title": "ニューデリー駅へ移動",
          "transport": "タクシー",
          "mapQuery": "New Delhi Railway Station"
        },
        {
          "time": "22:00",
          "title": "ニューデリー駅到着",
          "mapQuery": "New Delhi Railway Station"
        },
        {
          "time": "22:50",
          "endTime": "翌10:00",
          "title": "バラナシへ移動",
          "description": "車中泊",
          "transport": "電車"
        }
      ]
    },
    {
      "date": "2027-02-20",
      "title": "バラナシ観光",
      "items": [
        {
          "time": "10:00",
          "title": "バラナシ駅到着",
          "mapQuery": "バラナシ駅（正式駅名未確認）"
        },
        {
          "time": "日中",
          "title": "ガンジス川の舟・買い物・休憩",
          "transport": "舟・徒歩",
          "mapQuery": "ガンジス川 バラナシ",
          "detail": {
            "page": "sightseeing",
            "label": "観光地を見る",
            "anchor": "ganges"
          }
        },
        {
          "time": "18:00",
          "title": "プジャー",
          "description": "夕方のガンガー・アールティを見学",
          "mapQuery": "ダシャーシュワメード・ガート（会場候補）",
          "detail": {
            "page": "sightseeing",
            "label": "観光地を見る",
            "anchor": "ganges"
          }
        }
      ]
    },
    {
      "date": "2027-02-21",
      "title": "デリー観光",
      "items": [
        {
          "time": "6:00",
          "title": "ヨガ"
        },
        {
          "time": "11:20",
          "title": "バラナシ空港",
          "description": "出発時刻か集合時刻か要確認",
          "transport": "飛行機",
          "mapQuery": "Lal Bahadur Shastri International Airport"
        },
        {
          "time": "12:55",
          "title": "デリー空港到着",
          "transport": "飛行機",
          "mapQuery": "Indira Gandhi International Airport"
        },
        {
          "time": "午後",
          "title": "インド門",
          "mapQuery": "India Gate",
          "detail": {
            "page": "sightseeing",
            "label": "観光地を見る",
            "anchor": "india-gate"
          }
        },
        {
          "time": "午後",
          "title": "レッドフォート",
          "mapQuery": "Red Fort Delhi",
          "detail": {
            "page": "sightseeing",
            "label": "観光地を見る",
            "anchor": "red-fort"
          }
        },
        {
          "time": "午後",
          "title": "フマユーン廟",
          "mapQuery": "Humayun's Tomb",
          "detail": {
            "page": "sightseeing",
            "label": "観光地を見る",
            "anchor": "humayun"
          }
        },
        {
          "time": "時間があれば",
          "title": "クトゥブ・ミナール",
          "description": "候補",
          "mapQuery": "Qutub Minar",
          "detail": {
            "page": "sightseeing",
            "label": "観光地を見る",
            "anchor": "qutub"
          }
        }
      ]
    },
    {
      "date": "2027-02-22",
      "title": "ジャイプール観光",
      "items": [
        {
          "time": "0:07",
          "endTime": "8:30",
          "title": "ジャイプールへ移動",
          "description": "車中泊",
          "transport": "寝台列車",
          "mapQuery": "Jaipur Railway Station"
        },
        {
          "time": "8:30以降",
          "title": "ホテルに荷物を預ける",
          "description": "駅から車で約10分、その後アンベール城へ約30分",
          "transport": "車",
          "detail": {
            "page": "hotel",
            "label": "宿の詳細を見る",
            "anchor": "hotel-02"
          }
        },
        {
          "time": "9:30",
          "endTime": "11:30",
          "title": "アンベール城",
          "description": "象のタクシーは希望者・運行状況と動物福祉を考慮",
          "mapQuery": "Amber Fort",
          "detail": {
            "page": "sightseeing",
            "label": "観光地を見る",
            "anchor": "amber"
          }
        },
        {
          "time": "11:30",
          "endTime": "12:00",
          "title": "市街地へ移動",
          "transport": "オートリキシャ"
        },
        {
          "time": "12:00",
          "endTime": "13:00",
          "title": "ハワー・マハル前のカフェで昼食",
          "description": "店名未定",
          "mapQuery": "Hawa Mahal"
        },
        {
          "time": "13:00",
          "endTime": "14:00",
          "title": "ハワー・マハル",
          "description": "目安1時間",
          "mapQuery": "Hawa Mahal",
          "detail": {
            "page": "sightseeing",
            "label": "観光地を見る",
            "anchor": "hawa"
          }
        },
        {
          "time": "14:00",
          "endTime": "14:30",
          "title": "ジャンタル・マンタル",
          "description": "目安30分",
          "mapQuery": "Jantar Mantar Jaipur",
          "detail": {
            "page": "sightseeing",
            "label": "観光地を見る",
            "anchor": "jantar"
          }
        },
        {
          "time": "14:30",
          "endTime": "16:30",
          "title": "シティ・パレス",
          "description": "目安2時間",
          "mapQuery": "City Palace Jaipur",
          "detail": {
            "page": "sightseeing",
            "label": "観光地を見る",
            "anchor": "city-palace"
          }
        },
        {
          "time": "16:30",
          "endTime": "18:30",
          "title": "自由行動",
          "description": "ジョハリバザール、MIロード、ラムリーラ・マイダンなど。ホテル集合"
        },
        {
          "time": "18:30頃",
          "title": "宮殿ホテルへ移動",
          "description": "約20分",
          "transport": "オートリキシャ"
        },
        {
          "time": "19:00",
          "title": "宮殿ホテル",
          "description": "夕食・ダンスショー（詳細未確認）",
          "detail": {
            "page": "hotel",
            "label": "宿の詳細を見る",
            "anchor": "hotel-02"
          }
        }
      ]
    },
    {
      "date": "2027-02-23",
      "title": "アグラ観光・帰国便",
      "items": [
        {
          "time": "7:00",
          "endTime": "7:30",
          "title": "朝食"
        },
        {
          "time": "7:50",
          "title": "ホテル出発",
          "transport": "車（約5分）"
        },
        {
          "time": "8:00",
          "title": "ジャイプール駅到着",
          "mapQuery": "Jaipur Railway Station"
        },
        {
          "time": "8:10",
          "endTime": "12:45",
          "title": "アグラへ移動",
          "transport": "電車",
          "mapQuery": "アグラ駅（正式駅名未確認）"
        },
        {
          "time": "12:45以降",
          "title": "タージ・マハル",
          "description": "見学3時間希望。移動・入場待ちを含め要調整",
          "mapQuery": "Taj Mahal",
          "detail": {
            "page": "sightseeing",
            "label": "観光地を見る",
            "anchor": "taj"
          }
        },
        {
          "time": "午後",
          "title": "アグラ城",
          "description": "列車時刻に間に合う範囲で見学",
          "mapQuery": "Agra Fort",
          "detail": {
            "page": "sightseeing",
            "label": "観光地を見る",
            "anchor": "agra-fort"
          }
        },
        {
          "time": "17:35",
          "endTime": "19:30",
          "title": "デリーへ移動",
          "transport": "電車"
        },
        {
          "time": "19:40",
          "endTime": "20:20",
          "title": "空港へ移動",
          "transport": "車",
          "mapQuery": "Indira Gandhi International Airport"
        },
        {
          "time": "22:50",
          "title": "デリー空港出発",
          "transport": "飛行機",
          "mapQuery": "Indira Gandhi International Airport"
        }
      ]
    },
    {
      "date": "2027-02-24",
      "title": "帰国",
      "items": [
        {
          "time": "時刻未定",
          "title": "北京乗り換え",
          "transport": "飛行機",
          "mapQuery": "北京（空港未確認）"
        },
        {
          "time": "時刻未定",
          "title": "日本帰国",
          "transport": "飛行機"
        }
      ]
    }
  ],
  "map": {
    "title": "旅のマップ",
    "description": "今回巡るスポット",
    "embedUrl": ""
  }
};
