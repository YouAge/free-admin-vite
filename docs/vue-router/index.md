/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: vue4
 */

// history选项代替

```js
import { createWebHashHistory, createWebHistory } from 'vue-router'
import router from "../../src/router";

history: createWebHistory('/baseURL')
history: createWebHashHistory()

base选项移除

{
    path："/:pathMatch(.*)*"
}

isReady() 替代 onReady()
router.isReady()
```


/** 纪录页面滚动条*/

```js
scrollBehavior(ro,from,savedPostion){

    if(savedPostion){
        {
            top:10,left:10
        }
    }
}
```



/**
 * keep-alive transition 必须在 router-view内部
 * */
```html
<router-view :key="key" v-slot="{ Component }">
  <transition appear name="fade-transform" mode="out-in">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
```

router-link

append
```html
<router-link to="child-route" append>
<router-link :to="append($route.path,'child-route')"
```
