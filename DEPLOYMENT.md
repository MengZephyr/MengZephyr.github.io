# 网站上线与后续更新手册

这份工程采用 Vinext/React 开发，构建后生成纯静态文件，并由 GitHub Actions 发布到 GitHub Pages。自定义域名仍然是 `mengzephyr.com`。

## 1. 本地预览与检查

环境要求：Node.js 22.13 或更高版本，并启用 Corepack。

```powershell
cd D:\Projects\personal\website
corepack enable
corepack prepare pnpm@11.19.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

浏览器打开 `http://localhost:3000/`。完成修改后执行：

```powershell
pnpm test
```

这个命令会重新构建网站并检查首页、13 篇论文以及关键图片。可发布的静态文件位于 `dist/client/`。

## 2. 首次接入现有 GitHub 仓库

首次上线时不要覆盖远端历史。建议按以下顺序操作：

1. 登录 GitHub，确认自己可以管理 `MengZephyr/MengZephyr.github.io`。
2. 在本机给当前工程连接远端仓库并获取远端历史。
3. 基于远端当前默认分支创建一个备份分支，例如 `backup/legacy-site-2026-09-01`，并推送到 GitHub。
4. 对比旧站文件与新工程，确认自定义域名、论文附件及仍需保留的材料均已备份。
5. 将新工程作为一次清晰的提交合并到 `master`，再推送。

这些操作会改变线上仓库；首次执行时应逐步确认远端分支和备份分支存在后再继续。

## 3. GitHub Pages 设置

在 GitHub 仓库中打开 `Settings → Pages`：

1. `Build and deployment → Source` 选择 **GitHub Actions**。
2. `Custom domain` 填写 `mengzephyr.com`。
3. DNS 生效并签发证书后启用 **Enforce HTTPS**。
4. 在仓库的 `Actions` 页面确认 `Deploy website to GitHub Pages` 成功完成。

工作流文件是 `.github/workflows/deploy-pages.yml`。推送到 `master` 会自动构建和发布，也可以在 Actions 页面手动运行。

## 4. 域名与 DNS

当前域名的权威 DNS 在 DNSPod，而不是 GoDaddy。GoDaddy 很可能只负责域名注册。修改解析记录时，应登录 DNSPod 管理。

GitHub Pages 对根域名推荐以下四条 `A` 记录：

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

`www` 子域名使用：

```text
类型: CNAME
主机记录: www
记录值: mengzephyr.github.io
```

目前根域名已经指向 GitHub Pages，但只检测到前两条 `A` 记录。上线时可在 DNSPod 补齐后两条；不要删除已有的正确记录。DNS 修改可能需要一段时间传播。

## 5. 日常更新流程

```powershell
cd D:\Projects\personal\website
git pull --ff-only
pnpm install --frozen-lockfile
pnpm dev
pnpm test
git status
git add <本次修改的文件>
git commit -m "Update website content"
git push origin master
```

推送后到 GitHub Actions 确认部署成功，再检查：

- `https://mengzephyr.com/`
- `https://www.mengzephyr.com/`
- 首页图片、论文链接、邮箱链接和移动端布局

## 6. 回滚

如果新版本上线后出现问题：

1. 优先使用 `git revert <有问题的提交>` 创建反向提交，再推送 `master`。这会保留完整历史并自动重新部署。
2. 首次上线发生严重问题时，可从 `backup/legacy-site-2026-09-01` 恢复旧站内容。
3. 不要使用 `git reset --hard` 或强制推送来处理线上回滚，除非已经确认所有历史都有备份。

## 7. 不应提交到 GitHub 的内容

以下内容已由 `.gitignore` 排除：依赖目录、构建结果、Wrangler 日志、pnpm 本地缓存和环境变量文件。不要提交密码、令牌、DNS 登录信息或其他私密材料。
