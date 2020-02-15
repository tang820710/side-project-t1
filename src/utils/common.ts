import htmlEntitiesDecoder from './html-entities-decoder';

export function filterHtmlTag(value:string):string {
  return htmlEntitiesDecoder(value.replace(/<(?:.|\n)*?>/gm, (match) => {
    if (match.slice(1, 3).toLowerCase() === 'br') {
      return '\n';
    }
    return '';
  }));
}

export function getTime():string {
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
