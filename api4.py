import requests
import json

url = 'https://maps.googleapis.com/maps/api/place/textsearch/json'
q = {'query': '東京駅',
     'language': 'ja',
     'key': 'AIzaSyBJygwNY_Q8Vvvw2S5hiCc7lkL7fUrzzsc'}
import requests
res = requests.get(url,q)
json_o = res.json()
print(json_o)

print("=======================================================================================")

near_station_url="https://station.ic731.net/api/nearest?lon=139.69167&lat=35.68944"
res = requests.get(near_station_url)
result_list = json.loads(res.text)["data"]
best_station=result_list[0]
print(best_station["station_name"])

print("=======================================================================================")

API_KEY="28a7dae3df080074"
BASE_URL = r"http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key="+ API_KEY 
print(BASE_URL)
url=BASE_URL+ r'&access=*新宿*'+r"&format=json"
print(url)
pay={"genre":"G001"}
res = requests.get(url,pay)
result_list = json.loads(res.text)["results"]["shop"]["access"]
print([d.get("name") for d in result_list])


"""レスポンス一件当たりに含まれる情報
<results xmlns="http://webservice.recruit.co.jp/HotPepper/">
<api_version>1.26</api_version>
<results_available>1</results_available>
<results_returned>1</results_returned>
<results_start>1</results_start>
<shop>
<id>J001285707</id>
<name>博多焼鳥&大分やきとん 串焼き専門店 うまか 新宿店</name>
<logo_image>https://imgfp.hotp.jp/SYS/cmn/images/common/diary/custom/m30_img_noimage.gif</logo_image>
<name_kana>はかたやきとりおおいたやきとんたべほうだいくしやきせんもんてんぜんせきこしつうまかしんじゅくてん</name_kana>
<address>東京都新宿区新宿３-31-5　ペガサス館5F</address>
<station_name>新宿三丁目</station_name>
<ktai_coupon>0</ktai_coupon>
<large_service_area>
<code>SS10</code>
<name>関東</name>
</large_service_area>
<service_area>
<code>SA11</code>
<name>東京</name>
</service_area>
<large_area>
<code>Z011</code>
<name>東京</name>
</large_area>
<middle_area>
<code>Y055</code>
<name>新宿</name>
</middle_area>
<small_area>
<code>XA06</code>
<name>新宿三丁目</name>
</small_area>
<lat>35.6907061369</lat>
<lng>139.703781714</lng>
<genre>
<code>G001</code>
<name>居酒屋</name>
<catch>新宿 新宿三丁目 個室 居酒屋 焼き鳥 寿司</catch>
</genre>
<sub_genre>
<code>G004</code>
<name>和食</name>
</sub_genre>
<budget>
<code>B003</code>
<name>3001～4000円</name>
<average>焼き鳥＆焼きトン含む40品以上食べ放題コース3100円～！</average>
</budget>
<budget_memo>お通し代：あり ※コース併用時は除く</budget_memo>
<catch>焼き鳥・焼きとん食べ放題 完全個室は2名様～OK</catch>
<capacity>100</capacity>
<access>地下鉄丸ノ内線 新宿三丁目駅 徒歩1分 / 都営新宿線 新宿三丁目駅 徒歩2分</access>
<mobile_access>地下鉄丸ﾉ内線 新宿三丁目駅 徒歩1分</mobile_access>
<urls>
<pc>https://www.hotpepper.jp/strJ001285707/?vos=nhppalsa000016</pc>
</urls>
<open>月～日、祝日、祝前日: 15:00～翌0:00 （料理L.O. 23:00 ドリンクL.O. 23:30）</open>
<close>年中無休</close>
<party_capacity>100</party_capacity>
<wifi>あり</wifi>
<other_memo>幹事無料やお会計10％OFFなど、宴会をお得に楽しめるクーポン多数あり</other_memo>
<shop_detail_memo>新宿駅 新宿 新宿三丁目 個室 居酒屋 焼鳥 焼き鳥 焼きトン 肉寿司 食べ放題 飲み放題</shop_detail_memo>
<wedding>結婚式の二次会、パーティー、同窓会、歓送迎会など大人数でのご宴会も大歓迎</wedding>
<free_drink>あり ：クーポン利用で2時間飲み放題999円(税込1099円)</free_drink>
<free_food>あり ：匠の焼き鳥＆焼きトンが食べ放題＆飲み放題付で3100円～</free_food>
<private_room>あり ：個室席は2名様～ご利用OK・デートや記念日などに最適なプライベート空間</private_room>
<horigotatsu>なし ：ゆったりとお寛ぎいただけるスペースでご宴会をお楽しみください</horigotatsu>
<tatami>なし ：新宿での様々なシーンに幅広くご利用いただける完全個室を完備</tatami>
<card>利用可</card>
<non_smoking>禁煙席なし</non_smoking>
<charter>貸切可 ：貸切宴会は最大100名様まで利用可能・大型宴会もお任せください</charter>
<parking>なし ：近隣のコインパーキングをご利用ください。</parking>
<barrier_free>なし ：ご不便なことがございましたらお気軽にお申しつけください。</barrier_free>
<show>なし</show>
<karaoke>なし</karaoke>
<band>不可</band>
<tv>あり</tv>
<english>なし</english>
<pet>不可</pet>
<child>お子様連れ歓迎 ：お子様連れの方にも安心の扉付き完全個室を完備！</child>
<coupon_urls>
<pc>https://www.hotpepper.jp/strJ001285707/map/?vos=nhppalsa000016</pc>
<sp>https://www.hotpepper.jp/strJ001285707/scoupon/?vos=nhppalsa000016</sp>
</coupon_urls>
<course>あり</course>
<photo>
<pc>
<l>https://imgfp.hotp.jp/IMGH/75/40/P040057540/P040057540_238.jpg</l>
<m>https://imgfp.hotp.jp/IMGH/75/40/P040057540/P040057540_168.jpg</m>
<s>https://imgfp.hotp.jp/IMGH/75/40/P040057540/P040057540_58_s.jpg</s>
</pc>
<mobile>
<l>https://imgfp.hotp.jp/IMGH/75/40/P040057540/P040057540_168.jpg</l>
<s>https://imgfp.hotp.jp/IMGH/75/40/P040057540/P040057540_100.jpg</s>
</mobile>
</photo>
<lunch>あり</lunch>
<midnight>営業している</midnight>
</shop>
</results>
"""

