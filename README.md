### myNodeApi  
>author:  Dreacatcher  
>weibo:  顽强的小蜜蜂  

### 前言  
本项目是基于koa+node的开发的服务端API项目

### 项目介绍		
```
├─dist 文件夹是打包后的vue组件代码  
│  └─static 打包后压缩的js文件  
│  └─index.html 打包后页面入口文件  
├─build webpack配置文件  
├─aliasConfig 别名配置文件  
├─config 环境配置文件  
├─static 存放静态样式资源文件，如：字体图标  
├─src 属于本地开发的时候文件夹  
│  └─tools 属于公用js代码  
│  └─components 属于vue页面组件库，根据项目名称命名  
│  │  │  └─dir 项目文件夹以项目命名，解读项目文件夹  
│  │  │  │  └─controllers 存放该项目vue组件的业务代码 
│  │  │  │  └─img 存放该项目vue组件的图片  
│  │  │  │  └─scss 存放该项目vue组件的css  
│  │  │  │  └─ui 存放该项目公用vue组件  
│  │  │  │  └─.vue 就是该项目入口文件  
│  │  │  └─ui 存放该项目公用vue组库   
│  ├─images 属于存放公用的图片	  
│  ├─store 为状态管理  
│  ├─style 存放公用的scss，方便项目复用  
│  ├─router 存放路由文件  
│  ├─main.js 项目js入口文件  
│  ├─App 项目vuje入口文件   
├─.gitignore git上传忽略设置文件
├─.eslintignore eslint规则忽略设置文件  
├─postcss.config.js 处理postcss预加载配置文件  
├─index.html 整个项目页面入口文件
└─module.config.js 为webpack打包加载模块做别名戳处理文件  
```

### Build Setup  

``` bash
# install dependencies
npm install  

# serve with hot reload at localhost:8080
npm run dev  

# build for production with minification
npm run build  
