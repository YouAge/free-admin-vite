/**
 *@ github： https://github.com/YouAge
 *@ 文件简介：
 */

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object')
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src
}

/**
 * @description:  是否为字符串
 */
export function isString(val: unknown): val is string {
  return is(val, 'String')
}

/** 深拷贝*/
export function deepCopy<T = any>(obj: any = {}): T {
  return JSON.parse(JSON.stringify(obj))
}
