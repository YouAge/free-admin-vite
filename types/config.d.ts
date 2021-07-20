import { MenuModeEnum, Mode, Them } from '@/enums/menuEnum'

/**
 *@ github： https://github.com/YouAge
 *@ 文件简介： 配置信息定义
 */

export interface MenuSetting {
  hidden: boolean
  mode: MenuModeEnum
  collapsed: boolean
  show: boolean
  fixed: boolean
  theme: Them
}
