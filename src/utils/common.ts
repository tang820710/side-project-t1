import htmlEntitiesDecoder from "./html-entities-decoder";

export function filterHtmlTag(value: string): string {
  return htmlEntitiesDecoder(value.replace(/<(?:.|\n)*?>/gm, match => {
    if (match.slice(1, 3).toLowerCase() === "br") {
      return "\n";
    }
    return "";
  })
  );
}

export function getTime(): string {
  const now = new Date();
  const yy = now.getFullYear();
  const mm = now.getMonth() + 1;
  const dd = now.getDate();
  const hh = now.getHours();
  const ii = now.getMinutes();
  return (
    yy +
    (mm > 9 ? "" : "0") +
    mm +
    (dd > 9 ? "" : "0") +
    dd +
    (hh > 9 ? "" : "0") +
    hh +
    (ii > 9 ? "" : "0") +
    ii
  );
}

export function subOneDay(serverTime: any[]): string {
  serverTime[1] -= 1; // month -> 00 ~ 11
  
  const dateOffset = 24 * 60 * 60 * 1000; // one day
  const lastDay = new Date(new Date(...serverTime as []).getTime() - dateOffset);
  const mm = lastDay.getMonth() + 1;
  const dd = lastDay.getDate();

  return (
    lastDay.getFullYear() + (mm > 9 ? "" : "0") + mm + (dd > 9 ? "" : "0") + dd
  );
};

export function getOnSaleTime(h24m: {DateTime: string}): string {
  try {
    return (
      parseInt(h24m.DateTime.substr(-8, 2)) >= 10 ?
        h24m.DateTime.substr(0, 10).replace(/\//g, '') :
        subOneDay(h24m.DateTime.substr(0, 10).split('/'))
    );
  } catch (e) {
    return '';
  }
};