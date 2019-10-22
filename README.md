# maliang-component-demo

码良开发组件的简单使用及实现

#### 一、下拉代码简单使用介绍

##### （1）下载代码

[github](https://github.com/ymm-tech/gods-pen)

##### （2）使用yarn安装依赖(一定要使用yarn安装)

```
yarn install
```
如果是在windows系统上，如果缺少c++编译环境会报错，需要全局安装windows-build-tools。
```
npm install -g windows-build-tools
```

> 如果使用git bash工具安装时，需要以管理员身份打开工具执行该命令，否则安装不上。

##### （3）运行

```
npm start
```

#### 二、后台管理系统

##### （1）注册账号

[使用手册](https://godspen.ymm56.com/doc/cookbook/introduce.html)

注册完成之后就可以在线编辑h5页面了，具体操作可以参考使用手册。

#### 三、组件开发

##### （1）全局安装`gods-pen-cli`

```
npm install -g gods-pen-cli
```
##### （2）设置registry

```
# 设置为官方组件仓库 godspen.ymm56.com
gods-pen-config registry https://godspen.ymm56.com
```
##### （3）设置token

token注册账号后可以在管理后台的个人信息处查看。

> 此设置为非必须，可以在发布组件时在命令行交互中填写。

```
gods-pen-config token DEcTjQRFbiYitFydhC2m5kd8JHieQrsztrbiPaz5DbHk68AWbmMBe7ShXw2ncwp5
```
##### （4）创建组件

```
gods-pen-create <your-component-name>
```
##### （5）开发预览组件

```
cd <component-dir> // 先进入项目根目录下
yarn install  // 安装依赖
yarn start
# or
npm run dev
```

