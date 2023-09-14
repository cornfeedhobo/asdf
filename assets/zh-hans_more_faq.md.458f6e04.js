import{_ as e,o as a,c as o,Q as r}from"./chunks/framework.01af844e.js";const m=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"zh-hans/more/faq.md","filePath":"zh-hans/more/faq.md","lastUpdated":1671778129000}'),t={name:"zh-hans/more/faq.md"},s=r('<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><p>以下是 <code>asdf</code> 相关的一些常见问题。</p><h2 id="支持-wsl1-吗" tabindex="-1">支持 WSL1 吗？ <a class="header-anchor" href="#支持-wsl1-吗" aria-label="Permalink to &quot;支持 WSL1 吗？&quot;">​</a></h2><p>WSL1 (<a href="https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux#WSL_1" target="_blank" rel="noreferrer">Windows Subsystem for Linux 1</a>) 不受官方支持。<code>asdf</code> 的某些方面可能无法正常工作。我们不打算添加对 WSL1 的官方支持。</p><h2 id="支持-wsl2-吗" tabindex="-1">支持 WSL2 吗？ <a class="header-anchor" href="#支持-wsl2-吗" aria-label="Permalink to &quot;支持 WSL2 吗？&quot;">​</a></h2><p>WSL2 (<a href="https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux#WSL_2" target="_blank" rel="noreferrer">Windows Subsystem for Linux 2</a>) 应该作为你选择的 WSL 发行版来使用本设置和依赖说明。</p><p>重要的是，只有当前工作目录是 Unix 驱动器而不是绑定的 Windows 驱动器时，WSL2 <em>才能</em> 正常工作。</p><p>当 Github Actions 上提供主机运行器支持时，我们打算在 WSL2 上运行测试套件。（Github Actions 目前还未提供 WSL2 支持）</p><h2 id="新安装的可执行程序无法运行" tabindex="-1">新安装的可执行程序无法运行？ <a class="header-anchor" href="#新安装的可执行程序无法运行" aria-label="Permalink to &quot;新安装的可执行程序无法运行？&quot;">​</a></h2><blockquote><p>我执行了 <code>npm install -g yarn</code> 命令，但是之后不能运行 <code>yarn</code> 命令。这是为什么？</p></blockquote><p><code>asdf</code> 使用 <a href="https://zh.wikipedia.org/wiki/%E5%9E%AB%E7%89%87_(%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)" target="_blank" rel="noreferrer">垫片</a> 来管理可执行程序。插件所安装的那些命令会自动创建垫片，而通过 <code>asdf</code> 管理工具安装过的可执行程序则需要通知 <code>asdf</code> 创建垫片的需要。在这个例子中，为 <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">Yarn</a> 创建一个垫片即可。请查看 <a href="/zh-hans/manage/core.html#reshim"><code>asdf reshim</code> 命令文档</a> 了解更多。</p><h2 id="shell-没有检测到新安装的垫片" tabindex="-1">Shell 没有检测到新安装的垫片？ <a class="header-anchor" href="#shell-没有检测到新安装的垫片" aria-label="Permalink to &quot;Shell 没有检测到新安装的垫片？&quot;">​</a></h2><p>如果 <code>asdf reshim</code> 没有解决你的问题，那么很有可能是在 <code>asdf.sh</code> 或者 <code>asdf.fish</code> 的生效不在你的 Shell 配置文件（<code>.bash_profile</code>、<code>.zshrc</code>、<code>config.fish</code> 等等）的<strong>下方</strong>。这需要你在设置你的 <code>$PATH</code> <strong>之后</strong>和生效你的框架（oh-my-zsh 等等）（如果有的话）<strong>之后</strong>再生效。</p>',13),d=[s];function n(i,c,h,l,f,_){return a(),o("div",null,d)}const u=e(t,[["render",n]]);export{m as __pageData,u as default};
