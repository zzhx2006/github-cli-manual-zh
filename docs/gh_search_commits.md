# gh search commits

```
gh search commits [<query>] [flags]
```

在 GitHub 上搜索提交。

该命令支持使用 GitHub 搜索语法、使用参数和限定符标志或两者的组合来构造查询。

GitHub 搜索语法记录在：[https://docs.github.com/search-github/searching-on-github/searching-commits](https://docs.github.com/search-github/searching-on-github/searching-commits)

## 选项

`--author <string>`

按作者筛选

`--author-date <date>`

根据创作日期进行筛选

`--author-email <string>`

筛选作者电子邮件

`--author-name <string>`

按作者姓名筛选

`--committer <string>`

按提交者筛选

`--committer-date <date>`

根据提交日期筛选

`--committer-email <string>`

筛选提交者电子邮件

`--committer-name <string>`

根据提交者名称进行筛选

`--hash <string>`

按提交哈希值筛选

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`-L`, `--limit <int>`

要获取的最大提交数量

`--merge`

筛选合并提交

`--order <string>`

返回的提交顺序，除非指定了“--sort”标志，否则将被忽略：\{asc|desc\}

`--owner <string>`

按仓库所有者筛选

`--parent <string>`

按父哈希筛选

`--repo <strings>`

按仓库筛选

`--sort <string>`

排序提取的提交： \{author-date|committer-date\}

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`--tree <string>`

按树哈希筛选

`--visibility <strings>`

基于仓库可见性进行筛选：\{public|private|internal\}

`-w`, `--web`

在 Web 浏览器中打开搜索查询

## 示例

```
# 搜索提交匹配的关键字“readme”和“typo”
$ gh search commits readme typo

# 搜索提交匹配的短语“bug fix”
$ gh search commits "bug fix"

# 搜索由用户“monalisa”提交的 commit
$ gh search commits --committer=monalisa

# 搜索作者为用户“Jane Doe”的提交
$ gh search commits --author-name="Jane Doe"

# 搜索提交匹配哈希值“8dd03144ffdc6c0d486d6b705f9c7fba871ee7c3”
$ gh search commits --hash=8dd03144ffdc6c0d486d6b705f9c7fba871ee7c3

# 搜索2022年2月1日之前编写的提交
$ gh search commits --author-date="2022-02-01"
```

## 另请参见

- [gh search](/gh_search)