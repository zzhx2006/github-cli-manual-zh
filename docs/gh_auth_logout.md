# gh auth logout

```
gh auth logout [flags]
```

删除 GitHub 主机的身份验证。

此命令删除以交互方式或通过 --hostname 指定的主机的身份验证配置。

## 选项

`-h`, `--hostname <string>`

要注销的 GitHub 实例的主机名

## Examples

```
$ gh auth logout
# => 通过提示选择要注销的主机

$ gh auth logout --hostname enterprise.internal
# => 注销指定主机
```

## 另请参见

- [gh auth](/gh_auth)