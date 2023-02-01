# gh secret list

```
gh secret list [flags]
```

列出以下级别之一的 secret：

- 仓库（默认）：可用于仓库中的 Actions run 或 Dependabot
- 环境：可用于为仓库中的部署环境的 Actions run
- 组织：可用于组织内的 Actions run、Dependabot 或代码空间
- 用户：可用于用户的代码空间

## 选项

`-a`, `--app <string>`

列出特定应用程序的 secret：\{actions|codespaces|dependabot\}

`-e`, `--env <string>`

列出环境的 secret

`-o`, `--org <string>`

列出组织的 secret

`-u`, `--user`

列出用户的 secret

## 从父命令继承的选项

`-R`,  `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 另请参见

- [gh secret](/gh_secret)