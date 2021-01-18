<!--
 * @Author: liubaozhen
 * @Date: 2021-01-12 21:00:55
 * @LastEditTime: 2021-01-18 23:04:20
 * @LastEditors: liubaozhen
 * @Description: 
 * @FilePath: \webhis-frontd:\WorkingInterval\Karry\jianshu\README.md
-->
推荐使用 yarn 作为包管理器，需要先全局安装
 `npm i -g yarn`

安装依赖
`yarn `
或
`npm install`

启动项目
`yarn start`
或
`npm start`

Git工作流

本地开发之前先拉取最新代码

`git pull --rebase`

代码 commit 需要遵循 commit 规范
```commit
  feat    ✨  新功能/新特性
  fix     🐛  修复 bug
  style   💄  代码格式修改, 注意不是 css 修改
  docs    📝  添加/更新文档
  perf    👌  提高性能/优化
  test    ✅  增加/修改测试用例
  refactor🎨  代码重构
  chore   🎨  其他修改, 比如构建流程, 依赖管理
  publish 🚀  发布新版本
  tag     📌  发布新版本
```
`git add .`
`git commit -m 'fix: 修正xx'`

代码提交之前再次拉取远程代码

`git pull --rebase`

提交代码到分支

`git push origin your-local-branch:your-origin-dev-branch`

## 操作流程
###  安装 styled-components
### 重置样式 引入  reset.css
### yarn add less less-loader --dev
### yarn add react-transition-group
