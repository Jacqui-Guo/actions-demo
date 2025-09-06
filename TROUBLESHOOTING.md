# GitHub Pages 故障排除指南

## 🚨 常见错误及解决方案

### 错误: "Get Pages site failed" 或 "Not Found"

这个错误通常表示 GitHub Pages 没有正确启用。请按照以下步骤操作：

## 📋 完整解决步骤

### 步骤 1: 确认仓库状态
- [ ] 仓库是公开的（不是私有）
- [ ] 您有仓库的管理员权限
- [ ] 仓库名称正确

### 步骤 2: 启用 GitHub Pages

#### 方法 A: 使用 GitHub Actions（推荐）
1. 进入仓库的 **Settings** → **Pages**
2. 在 **Source** 部分选择 **"GitHub Actions"**
3. 点击 **Save**

#### 方法 B: 使用 gh-pages 分支
1. 进入仓库的 **Settings** → **Pages**
2. 在 **Source** 部分选择 **"Deploy from a branch"**
3. 选择 **"gh-pages"** 分支
4. 选择 **"/ (root)"** 文件夹
5. 点击 **Save**

### 步骤 3: 设置权限
1. 进入 **Settings** → **Actions** → **General**
2. 在 **Workflow permissions** 部分
3. 选择 **"Read and write permissions"**
4. 勾选 **"Allow GitHub Actions to create and approve pull requests"**
5. 点击 **Save**

### 步骤 4: 选择正确的工作流

我们提供了两个工作流文件：

#### 选项 1: pages.yml（使用 GitHub Actions）
- 使用现代的 GitHub Pages Actions
- 需要启用 "GitHub Actions" 作为源

#### 选项 2: gh-pages.yml（使用 gh-pages 分支）
- 使用传统的 gh-pages 分支
- 需要启用 "Deploy from a branch" 作为源

**建议**: 先尝试选项 2，因为它更简单可靠。

### 步骤 5: 删除其他工作流文件

为了避免冲突，请删除以下文件（如果存在）：
- `release-to-qa.yml`
- `github-pages.yml`
- `deploy.yml`
- `simple-deploy.yml`

只保留一个工作流文件。

### 步骤 6: 推送代码
```bash
git add .
git commit -m "Fix GitHub Pages deployment"
git push origin main
```

### 步骤 7: 检查部署
1. 进入仓库的 **Actions** 标签页
2. 查看工作流执行状态
3. 等待部署完成

## 🔧 高级故障排除

### 如果仍然失败：

1. **检查仓库名称**
   - 确保仓库名称中没有特殊字符
   - 尝试重命名仓库为简单的名称

2. **检查分支名称**
   - 确保默认分支是 `main` 或 `master`
   - 在工作流中更新分支名称

3. **检查构建输出**
   - 确保 `npm run build` 成功执行
   - 检查 `./out` 目录是否存在

4. **手动测试构建**
   ```bash
   npm run build
   ls -la out/
   ```

### 备选方案

如果 GitHub Pages 仍然有问题，可以考虑：

1. **Vercel**（推荐）
   - 访问 https://vercel.com
   - 导入 GitHub 仓库
   - 自动部署

2. **Netlify**
   - 访问 https://netlify.com
   - 连接 GitHub 仓库
   - 设置构建命令：`npm run build`
   - 设置发布目录：`out`

3. **Firebase Hosting**
   - 使用 Firebase CLI
   - 部署到 Firebase Hosting

## 📞 获取帮助

如果问题仍然存在：
1. 检查 GitHub Actions 的详细日志
2. 查看 GitHub Pages 的设置页面
3. 联系 GitHub 支持
4. 考虑使用其他部署平台
