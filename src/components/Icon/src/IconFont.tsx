/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 阿里云的 图标直接引入 https://www.iconfont.cn/
 */

import { defineComponent, PropType, computed, unref } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'
import { isString } from '@/utils'
let MyIcon = createFromIconfontCN({
  // scriptUrl: '//at.alicdn.com/t/font_2694519_al1vtfv47i.js'
  // 本地导入，
  scriptUrl: ''
})

export default defineComponent({
  props: {
    type: {
      type: String as PropType<String>,
      default: ''
    },
    color: {
      type: String as PropType<string>,
      default: '#FFF'
    },
    size: {
      type: [Number, String] as PropType<number | string>,
      default: 14
    },
    scriptUrl: {
      // 阿里图库字体图标路径
      type: String as PropType<string>,
      default: ''
    }
  },

  setup(props, { attrs }) {
    // 如果外部传进来字体图标路径，则覆盖默认的
    if (props.scriptUrl) {
      MyIcon = createFromIconfontCN({
        scriptUrl: props.scriptUrl
      })
    }
    const wrapStyleRef = computed(() => {
      const { color, size } = props

      const fs = isString(size) ? parseFloat(size) : size

      return {
        color,
        fontSize: `${fs}px`
      }
    })
    return () => <MyIcon type={props.type || ''} {...attrs} style={unref(wrapStyleRef)} />
  }
})
