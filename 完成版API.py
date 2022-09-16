from ctypes import BigEndianStructure
from re import L
import json
import requests
import random 
import time

def lambda_handler(event, context):
    locationA_name=event["body"].get("stationA")
    locationB_name=event["body"].get("stationB")
    
    #それぞれを緯度と経度に変換する
    locationA_name="https://nominatim.openstreetmap.org/search?q="+locationA_name+"&format=json"
    locationB_name="https://nominatim.openstreetmap.org/search?q="+locationB_name+"&format=json"
    #print(locationA_name)
    locationA_res = requests.get(locationA_name)
    locationB_res = requests.get(locationB_name)
    locationA_result_list = json.loads(locationA_res.text)
    locationB_result_list = json.loads(locationB_res.text)
    #print(locationA_result_list)
    locationA = locationA_result_list[0]
    locationB = locationB_result_list[0]
    print("A地点",locationA["lat"],locationA["lon"])
    print("B地点",locationB["lat"],locationB["lon"])

    #それぞれの緯度と経度を用いて中間地点を算出
    best_location_lat=(float(locationA["lat"])+float(locationB["lat"]))/2
    best_location_lon=(float(locationA["lon"])+float(locationB["lon"]))/2
    f_best_location_lat="{:.6f}".format(best_location_lat)
    f_best_location_lon="{:.6f}".format(best_location_lon)
    print("best",f_best_location_lat,f_best_location_lon)


    print("1の処理を完了=======================================================================================")

    #中間地点に一番近い駅を抽出
    """
    str_locatoinA=f_best_location_lon
    print(str_locatoinA)
    print(type(str_locatoinA))
    str_locatoinB=f_best_location_lat
    print(str_locatoinB)
    print(type(str_locatoinB))
    """
    near_station_url="https://station.ic731.net/api/nearest?lon="+f_best_location_lon+"&lat="+f_best_location_lat
    res = requests.get(near_station_url)
    result_list = json.loads(res.text)["data"]
    best_station=result_list[0]
    print(best_station["station_name"])
    
    print("2の処理を完了=======================================================================================")
    
    keyword=best_station["station_name"]
    API_KEY="28a7dae3df080074"
    BASE_URL = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key="+ API_KEY +"&count=100"
    #url=BASE_URL+ r'&'+"lng="+ keyword +r"&format=json"
    #url=BASE_URL+ "&lat=35.66&lng=139.761457&format=json"
    url=BASE_URL+ "&keyword="+keyword+"&format=json"
    pay={"genre":"G001"}
    res = requests.get(url,pay)
    result_list = json.loads(res.text)["results"]["shop"]
    #for i in result_list:
    #  print(i.get("name","address")+i.get("address")+str(i.get("lat"))+str(i.get("lng")))
    random.seed(int(time.time() * 1000))
    rand_num_list = random.sample(range(0, len(result_list),1), 2)
    print(rand_num_list[0])
    print(rand_num_list[1])
    
    best=result_list[rand_num_list[0]]
    best2=result_list[rand_num_list[1]]
    str = {
        "info":{
            "name": best.get("name"),
            "address": best.get("address"),
            "lat":best.get("lat"),
            "lng":best.get("lng")
            
        },
        "info2":{
            "name": best2.get("name"),
            "address": best2.get("address"),
            "lat":best2.get("lat"),
            "lng":best2.get("lng")
            
        }        
        }
    #str_json = json.dumps(student)
    print(str)
    return {
        'statusCode': 200,
        "headers": {
            "Content-Type": "*",
            "Access-Control-Allow-Origin": '*'
            },
        'body':str
        }
