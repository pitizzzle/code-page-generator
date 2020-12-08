# code-page-generator
idea: turn your code files into single-file syntax-highlighted html pages (eg. for sharing them via messenger)

![](docs/header.jpg)

# Usage

```bash
# download the files
git clone https://github.com/pitizzzle/code-page-generator.git

# alternative: download zip:
# https://github.com/pitizzzle/code-page-generator/archive/main.zip

# go into directory
cd code-page-generator/

# install dependencies
npm install

# paste your code files into the `content/` directory

# optional config:
#  - in `config/config.mjs`, choose the css stylesheet you want to use (or keep default)

# run the build
npm run build

# get your code pages from the `dist/` folder
```
