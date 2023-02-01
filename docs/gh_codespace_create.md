# gh codespace create

创建一个代码空间

```
gh codespace create [flags]
```

## 选项

`-b`, `--branch <string>`

仓库分支

`--default-permissions`

不提示接受代码空间请求的其他权限

`--devcontainer-path <string>`

创建代码空间时要使用的 devcontainer.json 文件的路径

`-d`, `--display-name <string>`

代码空间的显示名称

`--idle-timeout <duration>`

在代码空间停止之前允许不活动，例如“10m”、“1h”

`-l`, `--location <string>`

位置：{EastUs|SouthEastAsia|WestEurope|WestUs2}（如果未提供，则自动确定）

`-m`, `--machine <string>`

VM 的硬件规格

`-R`, `--repo <string>`

具有所有者的仓库名称：user/repo

`--retention-period <duration>`

关闭后自动删除代码空间之前的允许时间（最多 30 天），例如“1h”、“72h”

`-s`, `--status`

显示创建后命令和点文件的状态

## 另请参见

- [gh codespace](/gh_codespace)