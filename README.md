# FitGirl2Steam

[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

一款为 `fitgirl-repacks.site` 网站定制的油猴脚本，自动为游戏标题添加 Steam 商店和 SteamDB 的搜索跳转链接，方便快速查询游戏的 Steam 相关信息。

## 📋 功能特性
- **自动添加跳转链接**：为页面中游戏标题（`.entry-content h3` 下的 `strong` 标签）追加 Steam 商店和 SteamDB 搜索按钮
- **智能标题清洗**：自动过滤游戏标题中 ` – `（中文破折号+空格）后的冗余内容，提升搜索准确性
- **美观的按钮样式**：带 Steam/SteamDB 专属图标，配色贴合平台风格，不破坏原页面布局
- **安全的跳转方式**：新标签页打开链接（`_blank`），并添加 `noopener noreferrer` 保障安全
- **轻量无依赖**：无额外权限请求（`@grant none`），加载不影响原网站性能

## 🛠 安装步骤
### 1. 安装油猴脚本管理器
首先需要在浏览器中安装 Tampermonkey（推荐）、Greasemonkey 等油猴脚本管理器：
- Chrome/Edge/Opera：[Tampermonkey 扩展](https://www.tampermonkey.net/)
- Firefox：[Greasemonkey 扩展](https://addons.mozilla.org/zh-CN/firefox/addon/greasemonkey/)

### 2. 安装本脚本
方式 1（手动）：
1. 新建一个空白脚本
2. 复制本仓库中 `fitgirl2steam.user.js` 的全部代码
3. 粘贴到脚本编辑器中，保存并启用

方式 2（通过 GitHub，若有托管）：
直接访问脚本的 raw 链接，油猴管理器会自动识别并提示安装。

## 🚀 使用方法
1. 安装完成后，访问 [FitGirl Repacks 官网](https://fitgirl-repacks.site/)
2. 浏览任意包含游戏标题的页面（如游戏下载页）
3. 游戏标题旁会自动出现 `Steam` 和 `SteamDB` 按钮，点击即可跳转到对应平台的搜索结果页

## 📸 效果预览
| 原页面 | 脚本生效后 |
|--------|------------|
| ![原页面示例](https://github.com/J-EnJay/FitGirl2Steam/blob/main/img/1.png) | ![脚本生效后示例](https://github.com/J-EnJay/FitGirl2Steam/blob/main/img/2.png) |

## ⚠️ 注意事项
1. 脚本仅适配 `fitgirl-repacks.site` 域名，其他镜像站/仿站可能无法生效
2. 搜索结果的准确性依赖游戏标题匹配度，部分特殊命名/小众游戏可能搜索结果不准确
3. 若网站页面结构更新（如 CSS 类名、标签结构变更），脚本可能失效，需同步更新适配

## 📄 许可证
本项目基于 MIT 许可证开源，详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢
- FitGirl Repacks 提供优质的游戏重打包资源
- Steam/SteamDB 提供游戏信息查询平台
- Tampermonkey 等油猴管理器生态支持
