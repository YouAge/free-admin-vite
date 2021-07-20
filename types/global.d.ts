/**
 *@ github： https://github.com/YouAge
 *@ 文件简介：
 */

declare type Nullable<T> = T | null

declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
