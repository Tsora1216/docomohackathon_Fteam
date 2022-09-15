import requests
def cities_point():
  geo_request_url = 'https://get.geojs.io/v1/ip/geo.json'
  data = requests.get(geo_request_url).json()
  # print(data['latitude'])
  # print(data['longitude'])
  return data['latitude'],data['longitude']
