# gh mintty

MinTTY是默认情况下 Git for Windows 提供的终端仿真器。它在 gh 提示用户输入方面存在已知问题。

有一些方法可以让 gh 与 MinTTY 一起工作：

- 重新安装 Git for Windows，选中“为伪控制台启用实验支持（Enable experimental support for pseudo consoles）”。

- 在 Git for Windows 中使用不同的终端模拟器，如 Windows Terminal。您可以从任何终端仿真器运行“C:\Program Files\Git\bin\bash.exe”，继续使用 Git For Windows 中的所有工具，而不使用 MinTTY。

- 用 winpty 作为 gh 调用的前缀，例如：“winpty gh auth login”。注意：这可能会导致一些 UI 错误。

## 另请参见

- [gh](/gh)