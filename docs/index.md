# GitHub CLI 手册

GitHub CLI，或 `gh`，是 GitHub 的命令行界面，用于终端或脚本。

- [所有命令](/gh)

- [用法示例](https://cli.github.com/manual/examples)

- [社区扩展](https://github.com/topics/gh-extension)

## 安装

您可以在我们的 [README](https://github.com/cli/cli#installation) 上找到安装说明。

## 配置

- 运行 `gh-auth-login` 以使用GitHub帐户进行身份验证。或者，`gh` 使用 `GITHUB_TOKEN` [环境变量](/gh_help_environment)。

- 要设置首选编辑器，请使用 `gh config set editor <editor>`。阅读更多关于[ `gh config` ](/gh_config)和 [环境变量](/gh_help_environment) 的信息。

- 通过命令[ `gh alias set` ](/gh_alias_set)为你经常使用的命令定义别名。

## GitHub 企业版

GitHub CLI 支持 GitHub Enterprise Server 2.20 及更高版本。要使用 GitHub 实例进行身份验证，请运行：

```
gh auth login --hostname <hostname>
```

要将此主机定义为所有 GitHub CLI 命令的默认主机，请设置 GH_HOST 环境变量：

```
export GH_HOST=<hostname>
```

最后，要在脚本模式或自动化中验证命令，请设置 GH_ENTERPRISE_TOKEN：

```
export GH_ENTERPRISE_TOKEN=<access-token>
```

## 支持

- 在 [讨论](https://github.com/cli/cli/discussions) 中提出使用问题并向我们发送反馈

- 在我们的 [问题跟踪器](https://github.com/cli/cli/issues) 中报告 Bugs 或搜索现有功能请求
