# gh extension create

创建新扩展

```
gh extension create [<name>] [flags]
```

## 选项

`--precompiled <string>`

创建预编译扩展。可选的值：go、other

## 示例

```
# 以交互方式使用
gh extension create

# 创建基于脚本的扩展
gh extension create foobar

# 创建 Go 扩展
gh extension create --precompiled=go foobar

# 创建非 Go 预编译扩展
gh extension create --precompiled=other foobar
```

## 另请参见

- [gh extension](/gh_extension)