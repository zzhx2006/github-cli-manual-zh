# gh extension browse

```
gh extension browse [flags]
```

此命令将接管您的终端，并运行一个用于浏览、添加和删除 gh 扩展的完全交互式界面。

使用箭头键或 j/k 导航扩展列表。空格和 control+space（或 control + j/k）上下翻页列表。扩展 readme 文件可以通过向上翻页/向下翻页键滚动（fn + mac键盘上的向上/向下箭头）。

对于高亮显示的扩展，您可以按：

- w：在 web 浏览器中打开扩展
- i：安装扩展
- r：删除扩展

按 / 聚焦过滤器输入。按 enter 滚动结果。按 Escape 清除过滤器并返回完整列表。

按 q 退出。

对于屏幕阅读器用户、以高度放大操作的用户和其他辅助技术用户来说，此命令的输出可能难以导航。也不建议使用自动化脚本。我们建议这些用户使用替代命令：

```
gh ext search
```

以及 gh ext install、gh ext remove 和 gh repo view。

## 选项

`--debug`

输出日志到 /tmp/extBrowse-*

## 另请参见

- [gh extension](/gh_extension)