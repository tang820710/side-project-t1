import { filterHtmlTag } from '../utils/common';
import htmlEntities from '../utils/html-entities-decoder';

export const getServerTime: any = (h24m: {DateTime: string}) => {
  try {
    return h24m.DateTime.substr(0, 10).replace(/\//g, '')
  } catch (e) {
    return '';
  }
}

export const getBanner: any = (ad: any[], index: number) => {
  try {
    if (Array.isArray(ad[index]['Ads'])) {
      return { data: ad[index]['Ads'].map((value: any) => {
        const image = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Img'] && value['Nodes'][0]['Img']['Src'] ? value['Nodes'][0]['Img']['Src'] : '';
        const url = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Link'] && value['Nodes'][0]['Link']['Url'] ? value['Nodes'][0]['Link']['Url'] : '';
        return {
          image : image,
          url : url
        };
      }), error: false};
    } else {
      return { data: [], error: true };
    }
  } catch (e) {
    return { data: [], error: true };
  }
};

export const getCircle: any = (circle: {Block: [], Setting: []}) => {
  try {
    if (Array.isArray(circle['Block'])) {
      const getIconHandler = (d: []):object => {
        const data = d.filter((element, i) => i < 8 ).map((value: any) => {
          const image = value['Img'] && value['Img']['Src'] ? value['Img']['Src'].replace(/\/\/a.ecimg.tw/, '') : '';
          const title = value['Link'] && value['Link']['Text'] ? value['Link']['Text'] : '';
          const url = value['Link'] && value['Link']['Url'] ? value['Link']['Url'] : '';

          return {
            id:filterHtmlTag(htmlEntities(title)),
            image: image,
            title: filterHtmlTag(htmlEntities(title)),
            url: ((url[0]) ? (url[0] === '/') ? 'https:' : '' : '') + url,
          };
        });
        return data;
      };
  
      const data = circle['Block'].map((value, i) => {
        const BlockId = value['BlockId'] ? value['BlockId'] : '';
        //const group = value['BlockId'] ? value['BlockId'] % 10 : '';
        const panelBar: [] = circle['Block'] && circle['Block'][i] && circle['Block'][i]['Nodes'] ? circle['Block'][i]['Nodes'] : [];  
        const data = getIconHandler(panelBar);
        const h24mArrS = circle['Setting'] ? circle['Setting'] : [];
        const color = h24mArrS.filter(index => index['BlockId'] === BlockId).map(value => {
          const backcolor = value['BackColor'] ? value['BackColor'] : '';
          const forecolor = value['ForeColor'] ? value['ForeColor'] : '';
    
          return {
            backcolor: backcolor,
            forecolor: forecolor };
        });
        return {
          BlockId : BlockId,
          data: data,
          color:color
        };        
      });
      
      return { data: {
        data: data,
        length:data.length
      }, error: false };
    } else {
      return { data: {}, error: true };
    }
  } catch (e) {
    return { data: {}, error: true };
  }
};

export const getAd: any = (h24m: {Block: object[]}) => {
  try {
    if (Array.isArray(h24m['Block'])) {
      return { data: h24m['Block'].map((value: any) => {
        const BlockId = value['BlockId'] ? value['BlockId'] : '';
        if ((parseInt(BlockId) >= 4 && parseInt(BlockId) <= 6) || (parseInt(BlockId) >= 40 && parseInt(BlockId) <= 46)) {
          const image = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Img'] && value['Nodes'][0]['Img']['Src'] ? value['Nodes'][0]['Img']['Src'] : '';
          const title = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Img'] && value['Nodes'][0]['Img']['Title'] ? value['Nodes'][0]['Img']['Title'] : '';
          const url =  value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Link'] && value['Nodes'][0]['Link']['Url'] ? value['Nodes'][0]['Link']['Url'] : '';

          return {
            image: image,
            title: filterHtmlTag(htmlEntities(title)),
            url: ((url[0]) ? (url !== null && url[0] === '/') ? 'https:' : '' : '') + url,
            pos: 1 };
        }
        else if ((parseInt(BlockId) >= 7 && parseInt(BlockId) <= 9) || (parseInt(BlockId) >= 52 && parseInt(BlockId) <= 58)) {
          const image = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Img'] && value['Nodes'][0]['Img']['Src'] ? value['Nodes'][0]['Img']['Src'] : '';
          const title = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Img'] && value['Nodes'][0]['Img']['Title'] ? value['Nodes'][0]['Img']['Title'] : '';
          const url =  value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Link'] && value['Nodes'][0]['Link']['Url'] ? value['Nodes'][0]['Link']['Url'] : '';

          return {
            image: image,
            title: filterHtmlTag(htmlEntities(title)),
            url: ((url[0]) ? (url !== null && url[0] === '/') ? 'https:' : '' : '') + url,
            pos: 2 };
        }
        else if ((parseInt(BlockId) >= 19 && parseInt(BlockId) <= 21) || (parseInt(BlockId) >= 59 && parseInt(BlockId) <= 65)) {
          const image = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Img'] && value['Nodes'][0]['Img']['Src'] ? value['Nodes'][0]['Img']['Src'] : '';
          const title = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Img'] && value['Nodes'][0]['Img']['Title'] ? value['Nodes'][0]['Img']['Title'] : '';
          const url =  value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Link'] && value['Nodes'][0]['Link']['Url'] ? value['Nodes'][0]['Link']['Url'] : '';

          return {
            image: image,
            title: filterHtmlTag(htmlEntities(title)),
            url: ((url[0]) ? (url !== null && url[0] === '/') ? 'https:' : '' : '') + url,
            pos: 3 };
        }
      }).filter((element: any) => element !== undefined)
        .sort((a: any, b: any) => a.pos - b.pos), error: false };
    } else {
      return { data: [], error: true };
    }
  } catch (e) {
    return { data: [], error: true };
  }
}

export const getCategory: any = (category: object[]) => {
  try {
    if (Array.isArray(category)) {
      return { data: category, error: false };
    } else {
      return { data: [], error: true };
    }
  } catch (e) {
    return { data: [], error: true };
  }
};

export const getThreeOnSale: any = (threeOnSale: any[], hour: number) => {
  try {
    if (Array.isArray(threeOnSale[0]['Nodes'])) {  
      let data = threeOnSale[0]['Nodes'].map(value => {
        const image = value['Img'] && value['Img']['Src'] ? value['Img']['Src'].replace(/\/\/ec1img.pchome.com.tw/, '//c.ecimg.tw') : '';
        const url = value['Link'] && value['Link']['Url'] ? value['Link']['Url'].replace(/24h.pc/i, '24h.m.pc') : '';
        const info = value['Link'] && value['Link']['Text1'] ? value['Link']['Text1'].replace(/<br \/>/g, '\n') : '';
        const price = value['Link'] && value['Link']['Text2'] ? value['Link']['Text2'] : '';
        const time = value['ExtraData'] && value['ExtraData']['Time'] ? value['ExtraData']['Time'].substr(0, 5) : '';
        const name = value['Img'] && value['Img']['Title'] ? value['Img']['Title'].replace(/<br \/>/g, '\n') : '';
        const path = url.includes('tw/') && url.lastIndexOf('tw/') ? url.substr(url.lastIndexOf('tw/') + 3) : url.includes('jp/') && url.lastIndexOf('jp/') ? url.substr(url.lastIndexOf('jp/') + 3) : url ;
        const id = path.includes('?') ? path.substring(-1, path.indexOf('?')) : path;

        return {
          id: id,
          name:name,
          image: image,
          url: url,
          info: filterHtmlTag(htmlEntities(info)),
          price: price,
          time: time };
      });
      
      if (hour >= 15 && hour < 21) { // 15 ~ 21
        data = [data[1], data[2], data[0]];
      } else if (hour >= 21 || hour < 10) { // 21 ~ 隔天10
        data = [data[2], data[0], data[1]];
      }
  
      return { data: data, error: false };
    } else {
      return { data: [], error: true };
    }
  } catch (e) {
    return { data: [], error: true };
  }
};

export const getCrazyOnSale: any = (crazyOnSale: any[], hour: number) => {
  try {
    if (Array.isArray(crazyOnSale[0]['Nodes'])) {
      const theHour = (hour >= 10) ? hour : 12; // 早上10點前,用前一天的晚上12點判斷
      const START = ((((theHour % 6) * 10) + 20) % 60); //到隔日抓21~30筆
      const COUNT = 10;
  
      const data = crazyOnSale[0]['Nodes']
        .filter((element, i) =>
          (START <= i && i < START + COUNT) ||
            (60 + START <= i && i < 60 + START + COUNT) ||
              (120 + START <= i && i < 120 + START + COUNT)
        )
        .map(value => {
          const image = value['Img2'] && value['Img2']['Src'] ? value['Img2']['Src'].replace(/\/\/ec1img.pchome.com.tw/, '//d.ecimg.tw') : '';
          const url = value['Link'] && value['Link']['Url'] ? value['Link']['Url'].replace(/24h.pc/i, '24h.m.pc') : '';
          const info = value['Link'] && value['Link']['Text1'] ? value['Link']['Text1'].replace(/<br \/>/g, '\n').replace(/<[^>]*>/g, '') : '';
          const price = value['Link'] && value['Link']['Text2'] ? value['Link']['Text2'] : '';
  
          return {
            image: image,
            url: url,
            info: filterHtmlTag(htmlEntities(info)),
            price: price };
        });
  
      return { data: data, error: false };
    } else {
      return { data: [], error: true };
    }
  } catch (e) {
    return { data: [], error: true };
  }
};

export const getScrollText: any = (ad: any[]) => {
  try {
    if (Array.isArray(ad[2]['Ads'])) {  
      return { data: ad[2]['Ads'].map(value => {
        const text = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Link'] && value['Nodes'][0]['Link']['Text'] ? value['Nodes'][0]['Link']['Text'] : '';
        const url = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Link'] && value['Nodes'][0]['Link']['Url'] ? value['Nodes'][0]['Link']['Url'] : '';
  
        return {
          text : filterHtmlTag(htmlEntities(text)),
          url : url };
      }), error: false };
    } else {
      return { data: [], error: true };
    }
  } catch (e) {
    return { data: [], error: true };
  }
};

export const getVideo: any = (video: any[]) => {
  try {
    if (video instanceof Error) {
      return { data: [], error: true };
    } else {
      return { data: video, error: false };
    }
  } catch (e) {
    return { data: [], error: true };
  }
};

export const getActivitySale = (h24m: {Block: object[]}) => {
  try {
    if (Array.isArray(h24m['Block'])) {
      const possibleId = ['14', '15', '16', '17', '18', '47', '48', '49', '50', '51'];
      const blcokId = Array.from(new Set(
        h24m['Block'].map((index: any) => {
          const temp = index['BlockId'] ? index['BlockId'].substr(0, 2) : '';
          return temp;
        })
          .filter(index => possibleId.includes(index))
      ));
  
      return {
        data: blcokId.map(id => {
          let ad, title, data;
          h24m['Block'].forEach((value: any) => {
            if(value['BlockId']) {
              if(value['BlockId'] === `${id}-1`) {
                const image = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Img'] && value['Nodes'][0]['Img']['Src'] ? value['Nodes'][0]['Img']['Src'].replace(/\/\/a.ecimg.tw/, '') : '';
                const title = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Img'] && value['Nodes'][0]['Img']['Title'] ? value['Nodes'][0]['Img']['Title'] : '';
                const url = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Link'] && value['Nodes'][0]['Link']['Url'] ? value['Nodes'][0]['Link']['Url'] : '';
                const path = url.includes('tw/') && url.lastIndexOf('tw/') ? url.substr(url.lastIndexOf('tw/') + 3) : url.includes('jp/') && url.lastIndexOf('jp/') ? url.substr(url.lastIndexOf('jp/') + 3) : url ;
                const id = path.includes('?') ? path.substring(-1, path.indexOf('?')) : path;

                ad = {
                  id:id,
                  image: image,
                  title: filterHtmlTag(htmlEntities(title)),
                  url: ((url[0]) ? (url !== null && url[0] === '/') ? 'https:' : '' : '') + url
                };
              }
              else if(value['BlockId'] === `${id}-2`) {
                const image = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Img'] && value['Nodes'][0]['Img']['Src'] ? value['Nodes'][0]['Img']['Src'].replace(/\/\/a.ecimg.tw/, '') : '';
                const titleVal = value['Nodes'] && value['Nodes'][0] && value['Nodes'][0]['Link'] && value['Nodes'][0]['Link']['Text'] ? value['Nodes'][0]['Link']['Text'] : '';
  
                title = {
                  image: image,
                  title: filterHtmlTag(htmlEntities(titleVal))
                };
              }
              else if(value['BlockId'] === `${id}-3`) {
                const dataArr = value['Nodes'] ? value['Nodes'] : [];
  
                data = dataArr.map((item: any) => {
                  const image = item['Img'] && item['Img']['Src'] ? item['Img']['Src'].replace(/\/\/a.ecimg.tw/, '') : '';
                  const title = item['Link'] && item['Link']['Text'] ? item['Link']['Text'] : '';
                  const price = item['Link'] && item['Link']['Text1'] ? item['Link']['Text1'] : '';
                  const slogan = item['Link'] && item['Link']['Text3'] ? item['Link']['Text3'] : '';
                  const url = item['Link'] && item['Link']['Url'] ? item['Link']['Url'] : '';
  
                  return {
                    image: image,
                    title: filterHtmlTag(htmlEntities(title)),
                    price: price,
                    slogan: filterHtmlTag(htmlEntities(slogan)),
                    url: url
                  };
                });
              }
            }
          });
  
          return {ad, title, data};
        }), error: false };
    } else {
      return { data: [], error: true };
    }
  } catch (e) {
    return { data: [], error: true };
  }
};