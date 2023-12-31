## 物实富文本创作工具

[![State-of-the-art Shitcode](https://img.shields.io/static/v1?label=State-of-the-art&message=Shitcode&color=7B5804)](https://github.com/trekhleb/state-of-the-art-shitcode)

### 简介

这东西是我的1200粉丝福利，可以访问网站查看：[https://gushishang.github.io/src](https://gushishang.github.io/src) ，ui没做，慢慢填。逆天vh，下回老老实实用px算了。手机端页眉页脚忘记删了，电脑的字又太大，哎慢慢搞。

github托管，开不了正常，不同时间多试试，移动可能直接访问不了。我这边电信加载很快，测速来看联通最快，和物实服务器响应速度差不多。

### 教程

教程放在[使用文档](https://gitee.com/shang-yicheng/richtext/blob/master/help.md)（慢着好几个版本，懒得更新了），需要的自取。有点长慢慢看，有规律的。

语法尽量遵从了markdown，不理解的可以问我/跳过，有些时候记得加空格

~~既然markdown语言叫做md，我这个加上中国特色，就叫cnmd吧（）~~

### 更新日志

2023/8/12：开始构思

2023/8/14：上传 0.1.1 版本至 GitHub 和另一个托管平台

2023/8/15 0.1.2 更新：
- 改用`<{颜色}>{内容}</>`的写法取代`<font color={颜色}>{内容}</font>`
- 删除页脚、页面头部导航栏和标题，以方便以后适配物实内部浏览器

2023/8/18 0.1.3 更新：
- 优化函数，`使用 main()`替换整体替换函数，并增加传参功能以支持自选替换方式
- 增加`replaceApps()`函数，用于替换`:名称:`的 APP
- 优化算法，提升代码可读性和可维护性
- 新增`physics_url()`函数，用于替换超链接作品列表，支持过滤物实作品标签。
- 使用`main()`函数进行全部替换
- main 函数支持传递配置参数
- 更新文档注释
- 更新说明文档
- 接入百度统计

0.1.4 更新：
- 修复了`physics_url`函数不能全局替换的问题
- 使用更加简洁的语法代替`match`匹配内容

0.1.5 更新
- 增加了特定作品名称自动添加超链接的功能
- 修改了配置方式，位于`src/index.html`第56行

0.1.6 更新
- 将`onclick()`函数改到<script>标签内实现
- 删除了复制的旧方法，使用第三方库复制
- 增加了`清空输入输出`功能
- 复制内容时，将会先进行转换
- 大部分功能写入函数内部，方便维护。共有内容放入`public.js`
- 优化了代码体积，以及其他
- 富文本创作网页增加了设置功能，位于src/new_setting.html

### 参与贡献
1.  Fork 本仓库的dic文件夹下源码
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

