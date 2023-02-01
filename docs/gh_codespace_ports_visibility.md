# gh codespace ports visibility

更改转发端口的可见性

```
gh codespace ports visibility <port>:{public|private|org}...
```

## 从父命令继承的选项

`-c`, `--codespace <string>`

代码空间的名称

## 示例

```
gh codespace ports visibility 80:org 3000:private 8000:public
```

## 另请参见

- [gh codespace_ports](/gh_codespace_ports)