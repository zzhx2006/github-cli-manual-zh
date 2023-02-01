# gh auth refresh

```
gh auth refresh [flags]
```

扩展或修复存储凭据的权限范围（permission scope)。

--scopes 标志接受一个逗号分隔的作用域列表，其中列出了您希望 gh 凭据具有的作用域。如果不存在，此命令将确保 gh 可以访问到最小的范围。

## 选项

`-h`, `--hostname <string>`

用于身份验证的 GitHub 主机

`-s,` `--scopes <strings>`

gh 具有的其他身份验证范围

## 示例

```
$ gh auth refresh --scopes write:org,read:public_key
# => 打开浏览器以添加 write:org 和 read:public_key 范围以与 gh api 一起使用

$ gh auth refresh
# => 打开浏览器以确保身份验证凭据具有正确的最小范围
```

## 另请参见

- [gh auth](/gh_auth)