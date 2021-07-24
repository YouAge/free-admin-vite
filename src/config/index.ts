/**
 *@ github： https://github.com/YouAge
 *@ 文件简介：
 */

import { MenuSetting } from 'types/config'
import { MenuModeEnum } from '@/enums/menuEnum'

/** 主题配置接口*/
export const menuDefault: MenuSetting = {
  fixed: true,
  collapsed: false,
  show: true,
  hidden: false,
  mode: MenuModeEnum.INLINE,
  theme: 'dark ' //  'dark'  || 'light '
}
