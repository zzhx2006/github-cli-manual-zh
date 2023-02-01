# gh repo delete

```
gh repo delete [<repository>] [flags]
```

删除 GitHub 仓库。

如果没有参数，则删除当前仓库。否则，将删除指定的仓库。

删除需要使用“delete_repo”范围进行授权。要进行授权，请运行“gh auth refresh -s delete_repo”。

## 选项

`--yes`

确认删除而不提示

## 另请参见

- [gh repo](/gh_repo)