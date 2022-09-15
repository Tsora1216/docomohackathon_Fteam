import requests
import json

class HotpepperApi:
    # APIのURL
    api = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key={key}&lat={lat}&lng={lng}&range=2&order=1&format=json"

    # コンストラクタ引数：APIキー
    def __init__(self, api_key):
        self.api_key = api_key

    # 緯度・経度を指定して最寄りの飲食店名リストを取得（とりあえず検索半径は500m固定）
    def get_shop_name_list(self, lat, lng):
        url = self.api.format(key=self.api_key, lat=lat, lng=lng)
        response = requests.get(url)        
        # jsonデータをパースする
        result_list = json.loads(response.text)["results"]["shop"]
        return [d.get("name") for d in result_list]

if __name__ == '__main__': 
    # json ファイルに「keyキー」があるものとする
    # （key:APIキー）
    f = open("HotPepperApiSetting.json", 'r')
    json_data = json.load(f)

    obj = HotpepperApi(json_data["key"])
    result = obj.get_shop_name_list("33.590543", "130.420096")  
    print(result)    
