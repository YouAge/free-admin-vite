


# ts+vue3+vite 项目初始化

```shell
npm init vite@latest my-vue-app

# 注意， windows 电脑下面， 如果自己修改了npm全家安装包的路径， 切记路径下不能有空格的文件，否则创建失败
```

## 安装环境启动
```shell
npm install
npm run dev
```


## 配置eslint + prettier

```shell
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin
# @typescript-eslint/parser @typescr ipt-eslint/eslint-plugin 为eslint对typescript支持

```
### 配置 eslint文件

```shell
# .eslint.js

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    // 'no-use-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'space-before-function-paren': 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never']
  }
};
```

### 配置prettier

```shell
# prettier.config.js
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false, // 未尾逗号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 单引号
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'none', // 未尾分号
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf'
}
```


### 配置vsc编译器

```shell

```


## 修改vite配置，别名

```js


```



## 安装router、vuex、ant-design-vue@next

```shell
npm install vuex@next  vue-router@next  axios ant-design-vue@next --save
```

### 配置vue-router

```js
// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home.vue')
      },
      {
        path: 'abc',
        component: () => import('@/views/login/index.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory('/'),
  routes
})
export default router

// main.ts
app.user(router)
```


### 配置ant-design-vue

```js
// plugins/ant-design/index.ts

// 按需导入 ant-desing组件，  npm i vite-plugin-components -D
import {  Typography} from 'ant-design-vue'
const plugins = [Typography]
export function setupAntd(app: App<Element>) {
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
// main.ts
setupAntd(app)
```
