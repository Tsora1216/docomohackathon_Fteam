import requests

import requests

url = "http://zip.cgis.biz/xml/zip.php"
payload = {"zn": "1310045"}

r = requests.get(url, params=payload)

print(r.text)

API_KEY="28a7dae3df080074"
BASE_URL = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key="+ API_KEY + '&large_area=Z011'

url=BASE_URL
pay={"name":"居酒屋"}
res = requests.get(url,pay)

print(res.text)

jsondate=res.json()

print(jsondate["non_smoking"])
for jsonObj in jsondate:
    print(jsondate["name"])
