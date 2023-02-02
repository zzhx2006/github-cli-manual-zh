# GitHub CLI 中文手册

![GitHub](https://img.shields.io/github/license/ZhangZhanhaoxiang/github-cli-manual-zh?style=flat-square)
![GitHub deployments](https://img.shields.io/github/deployments/ZhangZhanhaoxiang/github-cli-manual-zh/github-pages?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/ZhangZhanhaoxiang/github-cli-manual-zh?style=flat-square)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/ZhangZhanhaoxiang/github-cli-manual-zh?style=flat-square)
![GitHub package.json version](https://img.shields.io/github/package-json/v/ZhangZhanhaoxiang/github-cli-manual-zh?style=flat-square)
![GitHub watchers](https://img.shields.io/github/watchers/ZhangZhanhaoxiang/github-cli-manual-zh?style=flat-square)

本手册为 [GitHub CLI 官方手册](https://cli.github.com/manual/) 的中文翻译.

请注意，本中译手册非官方翻译. 当本手册与官方英文原版有差异时，请以官方英文原版为准. 

## 仓库构成

本仓库有两个分支：

- `main`：主分支，项目的根目录；
- `gh-pages`：`docs/dist`目录. 

手册页的 Markdown <img src="https://simpleicons.org/icons/markdown.svg" width="16"/> 文件在 `main` 分支的 `docs` 目录下. 

## 本地构建

本项目由 VitePress<img src="https://simpleicons.org/icons/vite.svg" width="16"/> 搭建. 

需要预先安装 `yarn v1.22.19`、`VitePress v1.0.0-alpha.45`. 

克隆本仓库到本地：
```sh
$ git clone https://github.com/ZhangZhanhaoxiang/github-cli-manual-zh.git
$ cd github-cli-manual-zh
```

本地试运行：
```sh
$ yarn docs:dev
```
VitePress 会在 `http://localhost:5173/github-cli-manual-zh/` 热重载一个开发服务器.  

构建到 `./docs/dist` 目录：
```sh
$ yarn docs:build
```

## 贡献者

在 [CONTRIBUTING.md](CONTRIBUTING.md) 中可以查阅为该项目做出贡献的开发者. 

## 参与贡献

欢迎各位开源爱好者参与贡献此项目. 

当前本项目值得改进的地方包括但不限于：

- 修正翻译错误；
- 更正错别字；
- 修改病句；
- 优化排版格式；
- 新增翻译章节；
- 以官方原版为参照更新章节；
- 为 VitePress 增添功能. 

目前还有 [`gh help reference`](https://cli.github.com/manual/gh_help_reference) 和 [`examples`](https://cli.github.com/manual/examples) 两个章节缺少翻译. 

可以通过以下步骤为本项目做贡献：

1. Fork 本仓库；
2. 新建分支；
3. 修改代码；
4. commit 修改；
5. 提交 Pull Request.

感谢为本项目做出贡献的每一位开源爱好者！

## 许可协议

[MIT](LICENSE) © Zhanhaoxiang Zhang

<!--
![Bilibili](https://img.shields.io/badge/Bilibili-%E6%A2%85%E8%A5%BF%E8%80%B681-fb7299?logo=bilibili&link=https://space.bilibili.com/1805605010?style=flat-square)
-->
