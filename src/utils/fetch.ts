const HEADERS = new Headers();
HEADERS.append('Origin', 'https://24h.m.pchome.com.tw');

export const fetchAPI: any = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: HEADERS
  }).then(async r => JSON.parse(await r.text()));
