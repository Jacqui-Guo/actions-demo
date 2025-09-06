# GitHub Pages 部署配置指南

## 步骤 1: 启用 GitHub Pages

1. 进入您的 GitHub 仓库
2. 点击 **Settings** 标签页
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分选择 **Deploy from a branch**
5. 选择 **gh-pages** 分支
6. 选择 **/ (root)** 文件夹
7. 点击 **Save**

## 步骤 2: 设置仓库权限

1. 在 **Settings** 页面
2. 点击 **Actions** → **General**
3. 在 **Workflow permissions** 部分
4. 选择 **Read and write permissions**
5. 勾选 **Allow GitHub Actions to create and approve pull requests**
6. 点击 **Save**

## 步骤 3: 推送代码触发部署

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

## 步骤 4: 查看部署状态

1. 进入仓库的 **Actions** 标签页
2. 查看 "Deploy to GitHub Pages" 工作流
3. 等待部署完成

## 步骤 5: 访问您的网站

部署完成后，您的网站将在以下地址可用：
`https://yourusername.github.io/actions-demo`

## 故障排除

### 如果仍然出现 "Not Found" 错误：

1. 确保仓库是公开的（GitHub Pages 免费版只支持公开仓库）
2. 检查仓库名称是否正确
3. 等待几分钟让 GitHub 更新配置

### 如果部署失败：

1. 检查 Actions 日志中的错误信息
2. 确保所有依赖都已正确安装
3. 验证构建过程是否成功

## 备选方案

如果 GitHub Pages 配置仍有问题，可以考虑：

1. **Vercel**: 更简单的部署选项
2. **Netlify**: 另一个静态网站托管平台
3. **Firebase Hosting**: Google 的托管服务
