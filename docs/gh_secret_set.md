# gh secret set

```
gh secret set <secret-name> [flags]
```

给以下级别之一的 secret 设置一个值：

- 仓库（默认）：可用于仓库中的 Actions run 或 Dependabot
- 环境：可用于为仓库中的部署环境的 Actions run
- 组织：可用于组织内的 Actions run、Dependabot 或代码空间
- 用户：可用于用户的代码空间

可以选择将组织和用户 secret 限制为仅对特定仓库可用。
secret 值在发送到 GitHub 之前进行了本地加密。

## 选项

`-a`, `--app <string>`

为 secret 设置应用程序：\{actions|codespaces|dependabot\}

`-b`, `--body <string>`

secret 的值（如果未指定，则从标准输入读取）

`-e`, `--env <environment>`

设置部署环境 secret

`-f`, `--env-file <file>`

从 dotenv-formatted 文件加载 secret 名称和值

`--no-store`

打印加密的 base64 编码值，而不是将其存储在 Github 上

`-o`, `--org <organization>`

设置组织 secret

`-r`, `--repos <repositories>`

可以访问组织或用户 secret 的仓库列表

`-u`, `--user`

为用户设置 secret

`-v`, `--visibility <string>`

设置组织 secret 的可见性：\{all|private|selected\}

## 从父命令继承的选项

`-R`,  `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 在交互式提示中粘贴当前仓库的 secret 值
$ gh secret set MYSECRET

# 从环境变量读取 secret 值
$ gh secret set MYSECRET --body "$ENV_VALUE"

# 从文件中读取 secret 值
$ gh secret set MYSECRET < myfile.txt

# 为当前仓库中的部署环境设置 secret
$ gh secret set MYSECRET --env myenvironment

# 设置对公共和私有仓库都可见的组织级 secret
$ gh secret set MYSECRET --org myOrg --visibility all

# 设置对特定仓库可见的组织级 secret
$ gh secret set MYSECRET --org myOrg --repos repo1,repo2,repo3

# 为代码空间设置用户级 secret
$ gh secret set MYSECRET --user

# 为 Dependabot 设置仓库级 secret
$ gh secret set MYSECRET --app dependabot

# 设置从“.env”文件导入的多个 secret
$ gh secret set -f .env
```

## 另请参见

- [gh secret](/gh_secret)