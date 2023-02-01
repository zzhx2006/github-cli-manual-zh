# gh repo deploy-key add

```
gh repo deploy-key add <key-file> [flags]
```

向 GitHub 仓库添加部署密钥。

注意，gh 添加的任何密钥都将与当前身份验证令牌相关联。如果您从您的帐户中取消对 GitHub CLI 应用程序或身份验证令牌的授权，则 GitHub CLI 添加的任何部署密钥也将被删除。

## 选项

`-w`, `--allow-write`

允许对密钥进行写入访问

`-t`, `--title <string>`

新密钥的标题

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 生成无密码 SSH 密钥并将其作为部署密钥添加到仓库
$ ssh-keygen -t ed25519 -C "my description" -N "" -f ~/.ssh/gh-test
$ gh repo deploy-key add ~/.ssh/gh-test.pub
```

## 另请参见

- [gh repo deploy-key](/gh_repo_deploy-key)