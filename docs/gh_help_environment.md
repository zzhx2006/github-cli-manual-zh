# gh environment

GH_TOKEN，GITHUB_TOKEN（按优先级顺序）：github.com API 请求的身份验证令牌。设置此选项可避免提示进行身份验证，并优先于以前存储的凭据。

GH_ENTERPRISE_TOKEN，GITHUB_ENTERPRISE_TOKEN（按优先级顺序）：向 GitHub Enterprise 发出 API 请求的身份验证令牌。设置此项时，还要设置GH_HOST。

GH_HOST：为命令指定 GitHub 主机名，否则这些命令如果不在现有仓库的上下文中时将采用“github.com”主机。

GH_REPO：为在本地仓库上运行的命令指定 GitHub 仓库，格式为“[HOST/]OWNER/REPO”格式。

GH_EDITOR、GIT_EDITOR、VISUAL、EDITOR（按优先级顺序）：用于创作文本的编辑器工具。

GH_BROWSER，BROWSER（按优先级顺序）：用于打开链接的 Web 浏览器。

GH_DEBUG：设置为真实值以在标准错误时启用详细输出。设置为“api”以额外记录 HTTP 流量的详细信息。

DEBUG（已弃用）：设置为“1”、“true”或“yes”，以在标准错误时启用详细输出。

GH_PAGER，PAGER（按优先级顺序）：一个终端寻呼程序，用于发送标准输出，例如“less”。

GLAMOUR_STYLE：用于渲染 Markdown 的样式。请参阅 [https://github.com/charmbracelet/glamour#styles](https://github.com/charmbracelet/glamour#styles)

NO_COLOR：设置为任意值以避免打印 ANSI 转义序列以进行颜色输出。

CLICOLOR：设置为“0”以禁用在输出中打印 ANSI 颜色。

CLICOLOR_FORCE：设置为“0”以外的值，以保持 ANSI 颜色在输出中，即使输出是管道。

GH_FORCE_TTY：设置为任意值以强制终端式输出，即使输出被重定向也是如此。当值为数字时，它被解释为视图中可用的列数。当值为百分比时，它将应用于当前视图中可用的列数。

GH_NO_UPDATE_NOTIFIER：设置为任意值以禁用更新通知。默认情况下，gh 每 24 小时检查一次新版本，如果找到较新版本，则在标准错误时显示升级通知。

GH_CONFIG_DIR：gh 存储配置文件的目录。默认值：“$XDG_CONFIG_HOME/gh”或“$HOME/.config/gh”。

GH_PROMPT_DISABLED：设置为任意值以禁用终端中的交互式提示。

## 另请参见

- [gh](/gh)