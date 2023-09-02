Translation into English: ## Physical Reality Rich Text Creation Tool

### Introduction

This thing is a benefit for my 1200 fans. You can visit the website to check it out: [https://gushishang.github.io](https://gushishang.github.io). The UI hasn't been done yet, so I'll fill it in slowly. The vh value is too high, next time I'll use px properly. I forgot to delete the header and footer on the mobile page, and the text on the computer is too big. Ah, I'll work on it slowly.

Hosted on GitHub, it may not load properly. Try at different times, as mobile access may not work directly. It loads quickly on my end with China Telecom, but according to speed tests, China Unicom is the fastest, with a response speed similar to that of Physical Reality's servers.

### Tutorial

The tutorial is located in the [User Manual](https://gitee.com/shang-yicheng/richtext/blob/master/help.md) (multiple versions available, take what you need). It's a bit long, so take your time to read it. There are some patterns to follow.

The syntax follows Markdown as much as possible. If you don't understand something, you can ask me or skip it. Sometimes, remember to add spaces.

~~Since the Markdown language is called "md", I'll call this one "cnmd" (Chinese Markdown) with Chinese characteristics.~~

### Update Log

2023/8/12: Started conceptualizing.

2023/8/14: Uploaded version 0.1.1 to GitHub and another hosting platform.

2023/8/15 Version 0.1.2 update:
- Replaced the syntax `<font color={color}>{content}</font>` with `<{color}>{content}</>` for convenience. 
- Removed the footer, header navigation bar, and title to facilitate adaptation for the Physical Reality internal browser.

2023/8/18 Version 0.1.3 update:
- Optimized the function by replacing the entire replacement function with `main()` and added parameter passing to support optional replacement methods.
- Added the `replaceApps()` function to replace "APP: Name:" with APP, inspired by Li Weijia.
- Improved the algorithm to enhance code readability and maintainability.
- Added the `physics_url()` function to replace hyperlinks with a list of works, supporting filtering of Physical Reality work tags, inspired by [user=5dbd8c3a581da82d4fd165e2]Maizi[/user].
- Used the `main()` function for all replacements.
- The `main()` function supports passing configuration parameters.
- Updated documentation comments.
- Updated the instruction document.
- Integrated Baidu Analytics.

Version 0.1.4 update:
- Fixed the issue where the `physics_url()` function couldn't perform global replacement.
- Used a more concise syntax to replace matching content.

Version 0.1.5 update:
- Added automatic hyperlinks for specific work names.
- Modified the configuration method, located in line 56 of index.html.

### Contributing
1. Fork the source code under the `dic` folder of this repository.
2. Create a new `Feat_xxx` branch.
3. Commit your code.
4. Create a new Pull Request.