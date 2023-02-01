# gh extension

GitHub CLI 扩展是提供附加 gh 命令的仓库。

扩展仓库的名称必须以“gh-”开头，并且必须包含同名的可执行文件。传递给 `gh <extname>` 调用的所有参数都将转发给扩展的 `gh-<extname>` 可执行文件。

扩展不能覆盖任何核心（core）gh 命令。如果扩展名与核心 gh 命令冲突，可以使用 `gh extension exec <extname>`。

请参阅 [https://github.com/topics/gh-extension](https://github.com/topics/gh-extension) 上的可用扩展列表。

## 可用的命令

- [gh extension browse](/gh_extension_browse)
- [gh extension create](/gh_extension_create)
- [gh extension exec](/gh_extension_exec)
- [gh extension install](/gh_extension_install)
- [gh extension list](/gh_extension_list)
- [gh extension remove](/gh_extension_remove)
- [gh extension search](/gh_extension_search)
- [gh extension upgrade](/gh_extension_upgrade)

## 另请参见

- [gh](/gh)