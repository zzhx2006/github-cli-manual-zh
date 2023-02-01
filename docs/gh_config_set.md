# gh config set

使用给定键的值更新配置

```
gh config set <key> <value> [flags]
```

## 选项

`-h`, `--host <string>`

给每个主机都设置

## 示例

```
$ gh config set editor vim
$ gh config set editor "code --wait"
$ gh config set git_protocol ssh --host github.com
$ gh config set prompt disabled
```

## 另请参见

- [gh config](/gh_config)