// tsconfig.json
const defaults = {
  compilerOptions: {
    incremental: true, // 增量编译，ts 编译器可以在第一次编译后生成一个可以存储编译信息的文件，
    // 在二次编译时会根据这个文件做增量编译，这样就可以提高编译的速度
    tsBuildInfoFile: './buildFile', // 增量编译文件的存储位置
    diagnostics: false, // 打印诊断信息

    target: 'es5', // 目标语言的版本
    module: 'commonjs', // 生成代码的模块标准
    outFile: './app.js', // 将多个相互依赖的文件生成一个文件，可以用在 AMD 模块中
    // 指定 moudle 为 amd ，编译时会将多个 ts 文件合并打包成一个 js 文件

    lib: [], // ts 需要引用的库，即声明文件。就算没有引用任何类库，当目标语言的版本是 es5 时
    // 也会默认引用 "dom", "es5", "scripthost"

    allowJs: true, // 允许编译 JS 文件（js、jsx）
    checkJs: true, // 允许指出在 JS 文件中的报错信息，通常与 allowJs 一起使用
    outDir: './out', // 指定输出目录（所有编译后的文件会存放于此目录中）
    rootDir: './', // 用来控制输出的目录结构（指定输入文件目录）

    declaration: true, // 用于生成声明文件，如 index.ts -> index.d.ts
    declarationDir: './d', // 声明文件的路径
    emitDeclarationOnly: true, // 只生成声明文件（不会生成 js 文件）
    sourceMap: true, // 生成目标文件的 sourceMap，如 index.ts -> index.js.map
    inlineSourceMap: true, // 生成目标文件的 inline sourceMap（包含在生成的 js 文件之中）
    declarationMap: true, // 生成声明文件的 sourceMap，如 index.ts -> index.d.ts 和 index.d.ts.map
    typeRoots: [], // 声明文件目录，默认 node_modules/@types
    types: [], // 指定需要加载的声明文件的包，如果指定了某一个包，就会只加载这个包的声明文件

    removeComments: true, // 删除注释

    noEmit: true, // 不输出任何文件
    noEmitOnError: true, // 发生错误时，不输出文件

    noEmitHelpers: true, // 不生成 helper 函数，需额外安装 ts-helpers
    importHelpers: true, // 通过 tslib 引入 helper 函数，文件必须是模块

    downlevelIteration: true, // 降级遍历器的实现（es3/es5）

    strict: true, // 开启所有严格的类型检查，为 true 时，下面类型检查相关的取值也都为 true
    alwaysStrict: true, // 在代码中注入 "use strict"
    noImplicitAny: true, // 不允许隐式的 any 类型
    strictNullChecks: true, // 不允许把 null、undefined 赋值给其它类型变量
    strictFunctionTypes: true, // 不允许函数参数双向协变
    strictPropertyInitialization: true, // 类的实例属性必须初始化
    strictBindCallApply: true, // 严格的 bind、call、apply 检查
    noImplicitThis: true, // 不允许 this 有隐式的 any 类型

    noUnusedLocals: true, // 检查只声明，未使用的局部变量
    noUnusedParameters: true, // 检查未使用的函数参数
    noFallthroughCasesInSwitch: true, // 防止 switch 语句贯穿（如果某一个分支没有 break，下面的分支将会依次执行）
    noImplicitReturns: true, // 每个分支都要有返回值，如 if else 中都要有返回值

    esModuleInterop: true, // 如果一个模块用 export = 导出， 既可以用 import from 导入，也可以用 import = 导入
    allowUmdGlobalAccess: true, // 允许在模块中以全局变量的方式访问 UMD模块
    moduleResolution: 'node', // 模块解析策略，默认 node，还可以用 classic
    baseUrl: './', // 解析非相对模块的基地址，默认是当前目录
    paths: {
      // 路径映射，相对于 baseUrl
      jquery: ['node_modules/jquery/dist/jquery.slim.min.js']
    },
    rootDirs: ['src', 'out'], // 将多个目录放在一个虚拟目录下，用于运行时

    listEmittedFiles: true, // 打印输出的文件
    listFiles: true // 打印编译的文件（包括引用的声明文件）
  }
}

const extendsp = {
  extends: './tsconfig.base.json',
  // 还可以覆盖 tsconfig.base.json 中的配置
  exclude: [], // 指定不排除任何目录
  compileOnSave: true // 保存文件时让编译器自动编译，vscode暂不支持
}

const fild = {
  // 配置文件之间是可以继承的，可以把一些基础的配置抽离出来方便复用，然后通过 extends 选项来导入基础配置
  files: [
    // 数组，表示编译器需要编译的单个文件的列表
    'src/a.ts' // 运行 tsc 命令时，只有 a.ts 被编译了
  ],
  include: [
    // 数组，表示编译器需要编译的文件或目录
    'src', // 会编译 src 目录下所有的 ts 文件
    'src/*', // 只会编译 src 一级目录下的 ts 文件
    'src/*/*' // 只会编译 src 二级目录下的 ts 文件
  ],
  exclude: [
    // 数组，表示编译器需要排除的文件或目录，默认会排除 node_modules 下的所有文件和所有的声明文件
    'src/lib' // 表示不会编译src下的lib目录
  ]
}
