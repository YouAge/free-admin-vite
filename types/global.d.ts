import { _RouteRecordBase, RouteRecordRedirectOption, RouteRecordRaw } from 'vue-router'

/**
 *@ github： https://github.com/YouAge
 *@ 文件简介：
 */

declare type Nullable<T> = T | null

declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

export declare type FRouteRecordRaw = RouteRecordRaw | FRouteRecord
declare interface FRouteRecord extends _RouteRecordBase {
  unfold?: boolean
  hidden?: boolean
}
