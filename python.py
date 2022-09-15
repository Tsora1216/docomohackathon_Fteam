import requests
import json

"""
#APIのベースURL
base = 'https://maps.googleapis.com/maps/api/place/textsearch/json'
#検索したいワード
query = '新宿+マクドナルド'
#自分のAPIキー
key = '自分のAPIキー'
"""
#リクエスト用URL
#url = '{}?query={}&key={}&language=ja'.format(base, query, key)
url = 'https://date.nager.at/api/v2/PublicHolidays/2020/JP'
#レスポンス
res = requests.get(url)
#jsonデータを解析
json_data = json.loads(res.content)
#結果だけを抽出
data = json_data['results']

#順位ごとに表示
for i in range(len(data)):    
    print('{}位：{}'.format(i+1, data[i]['name']))