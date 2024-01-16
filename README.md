# @design-view/starter-cli

用于快速初始化不同项目模块的脚手架

可基于此脚手架进行二次开发，打造内部的初始化模板的脚手架

## 全局安装

```shell
pnpm add @design-view/starter-cli -g

```

## 帮助命令

```shell
starter -h

```

## 查看已知模板列表

```shell
starter list

```

## 初始化项目模板

```shell
starter init

```

## 注意事项

该脚手架不提供新增和删除的功能，因为这很容易造成误删，如果有需求的，可以自行添加新增和删除的命令。

推荐还是在 `template.json` 中去手动添加新增模板，之后重新发布到 npm 上，最后执行以下命令来更新全局脚手架，以保证获得最新的模板列表。

```shell
pnpm add @design-view/starter-cli -g

```

## 相关文章

[搭建快速启动不同模板的前端脚手架](https://juejin.cn/post/7107819430150668301/)
