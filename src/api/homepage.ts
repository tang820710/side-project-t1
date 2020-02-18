import { filterHtmlTag } from '../utils/common';
import htmlEntities from '../utils/html-entities-decoder';

export const getServerTime: any = (h24m: {DateTime: string}) => {
  try {
    return h24m.DateTime.replace(/\/|:| /g, '')
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