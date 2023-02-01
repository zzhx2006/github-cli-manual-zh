# gh codespace list

```
gh codespace list [flags]
```

列出已验证用户的代码空间。

或者，组织管理员可以列出向组织计费的所有代码空间。

## 选项

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`-L`, `--limit <int>`

要列出的代码空间的最大数量

`-o, --org <login>`

用于列出其代码空间的组织登录句柄（仅限管理员）

`-R`, `--repo <string>`

具有所有者的仓库名称：user/repo

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`-u`, `--user <username>`

要列出其代码空间的用户名（与 --org 一起使用）

## 另请参见

- [gh codespace](/gh_codespace)