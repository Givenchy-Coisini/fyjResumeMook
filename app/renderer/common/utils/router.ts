import { compile } from 'path-to-regexp';
/**
 * @desc 判断是否属于外部连接
 * @param {string} url - 链接
 */
export function isHttpOrHttpsUrl(url: string): boolean {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}

export function compilePath(route: string, params?: { [key: string]: any }) {
  const toPath = compile(route, { encode: encodeURIComponent });
  return toPath(params);
}
