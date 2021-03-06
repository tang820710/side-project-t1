const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

export const API = (url: string, time?: string): string =>
  url === "COOKIES_ECC"
    ? `${corsAnywhere}https://24h.m.pchome.com.tw/cdn/ecapi/appcheck/v1/index.php`
    : url === "H24_MOBILE"
      ? `${corsAnywhere}https://24h.m.pchome.com.tw/cdn/index/v1.1/data&wt=json&${time}`
      : url === "AD"
        ? `${corsAnywhere}https://24h.m.pchome.com.tw/cdn/ecapi/xdsys/v3/ad&channel=app_hp_channel_all&_callback=jsonpcb_channels&`
        : url === "CIRCLE"
          ? `${corsAnywhere}http://24h.m.pchome.com.tw/cdn/appindex/data&wt=json&${time}`
          : url === "CATEGORY"
            ? `${corsAnywhere}https://24h.m.pchome.com.tw/cdn/ecapi/ecshop/cateapi/v1.5/sign&site=24h&fields=Id,Name,Sort,Nodes`
            : url === "THREE_ONSALE"
              ? `${corsAnywhere}https://ecapi.pchome.com.tw/cdn/ecshop/adapi/v5.1/ad&q=welcome&d=${time}&_callback=&&h24`
              : url === "CRAZY_ONSALE"
                ? `${corsAnywhere}https://ecapi.pchome.com.tw/cdn/ecshop/adapi/v5/ad&q=onsale&d=${time}&_callback=&&h24`
                : url === "VIDEO"
                  ? `${corsAnywhere}https://24h.m.pchome.com.tw/cdn/video/collection.htm/data&wt=json&${time}`
                  : "";