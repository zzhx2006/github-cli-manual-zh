# gh codespace delete

```
gh codespace delete [flags]
```

根据选择条件删除代码空间。

可以删除已验证用户的所有代码空间以及特定仓库的代码空间。或者，只能删除超过 N 天的代码空间。

组织管理员可以删除向组织计费的任何代码空间。

## 选项

`--all`

删除所有代码空间

`-c`, `--codespace <string>`

代码空间的名称

`--days <N>`

删除超过 N 天的代码空间

`-f`, `--force`

跳过对包含未保存更改的代码空间的确认

`-o`, `--org <login>`

组织的登录句柄（仅限管理员）

`-R`, `--repo <repository>`

删除仓库的代码空间

`-u`, `--user <username>`

要删除其代码空间的用户名（与 --org 一起使用）

## 另请参见

- [gh codespace](/gh_codespace)