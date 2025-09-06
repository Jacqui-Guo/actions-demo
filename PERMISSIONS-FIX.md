# GitHub Actions 权限问题解决方案

## 🚨 错误: Permission denied to github-actions[bot]

这个错误表示 GitHub Actions 没有足够的权限推送到 `gh-pages` 分支。

## 🔧 解决方案

### 方案 1: 设置仓库权限（推荐）

1. **进入仓库设置**：
   - 进入您的 GitHub 仓库
   - 点击 **Settings** 标签页

2. **设置 Actions 权限**：
   - 点击 **Actions** → **General**
   - 在 **Workflow permissions** 部分
   - 选择 **"Read and write permissions"**
   - 勾选 **"Allow GitHub Actions to create and approve pull requests"**
   - 点击 **Save**

3. **重新运行工作流**：
   - 进入 **Actions** 标签页
   - 找到失败的工作流
   - 点击 **"Re-run jobs"**

### 方案 2: 使用 Personal Access Token

如果方案 1 不起作用，需要创建 Personal Access Token：

1. **创建 Personal Access Token**：
   - 进入 GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - 点击 **"Generate new token (classic)"**
   - 选择 **"repo"** 权限
   - 点击 **"Generate token"**
   - 复制生成的 token

2. **添加 Secret**：
   - 进入仓库 Settings → Secrets and variables → Actions
   - 点击 **"New repository secret"**
   - Name: `PERSONAL_TOKEN`
   - Value: 粘贴刚才复制的 token
   - 点击 **"Add secret"**

3. **使用 PAT 工作流**：
   - 使用 `deploy-with-pat.yml` 工作流
   - 或者更新现有工作流使用 `personal_token` 而不是 `github_token`

### 方案 3: 使用 GitHub Actions 部署（最简单）

1. **启用 GitHub Pages**：
   - Settings → Pages
   - Source 选择 **"GitHub Actions"**

2. **使用 pages.yml 工作流**：
   - 这个工作流使用现代的 GitHub Actions 部署方式
   - 不需要手动管理 gh-pages 分支
   - 权限问题更少

## 📋 推荐操作步骤

1. **首先尝试方案 1**（设置仓库权限）
2. **如果仍然失败，使用方案 3**（GitHub Actions 部署）
3. **最后考虑方案 2**（Personal Access Token）

## 🔍 验证权限设置

检查权限是否正确设置：
- 仓库是公开的
- Actions 权限设置为 "Read and write"
- 工作流文件包含正确的 permissions 配置

## ⚠️ 注意事项

- Personal Access Token 有安全风险，建议优先使用其他方案
- 确保仓库是公开的（GitHub Pages 免费版要求）
- 权限更改可能需要几分钟生效
