# gh gist create

```
gh gist create [<filename>... | -] [flags]
```

用给定的内容创建一个新的 GitHub gist。

Gist 可以从一个或多个文件创建。或者，传递“-”作为从标准输入中读取的文件名。

默认情况下，gist 是保密的；使用“--public”使其公开。

## 选项

`-d`, `--desc <string>`

此 gist 的描述

`-f`, `--filename <string>`

提供从标准输入读取时要使用的文件名

`-p`, `--public`

公开列出 gist（默认：secret）

`-w`, `--web`

使用创建的 gist 打开 Web 浏览器

## 示例

```
# 将文件“hello.py”发布为公共 gist
$ gh gist create --public hello.py

# 创建带有说明的 gist
$ gh gist create hello.py -d "my Hello-World program in Python"

# 创建包含多个文件的 gist
$ gh gist create hello.py world.py cool.txt

# 从标准输入读取以创建 gist
$ gh gist create -

# 从另一个命令通过管道传输的输出创建 gist
$ cat cool.txt | gh gist create
```

## 另请参见

- [gh gist](/gh_gist)