const fs = require('fs');
const parser = require('xml2json');
const fetch = require('node-fetch');
const API_KEY = '28a7dae3df080074'

/**APIのURL */
const URL = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + '&large_area=Z011'

/** 非同期処理 */
async function main() {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
    const data = await res.text();
    var json = parser.toJson(data);

    const obj = JSON.parse(json)
    console.log('xmlns:' +obj.results.xmlns)
    console.log('店舗名:' +obj.results.shop[0].name)
    console.log('住所:' +obj.results.shop[0].address)
  } catch (err) {
    console.error(err);
  }
}

main();