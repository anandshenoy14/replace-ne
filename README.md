# replace-ne

A simple utility in the form of a VS Code Extension which allows users to get rid of notEmpty in their code which is useful while porting from MarkoV2 to MarkoV3.

Read more about [Marko](https://markojs.com/)

## Features

Converts `(notEmpty(data.object))` to `(data.object)`

## Steps

1. Open `template.marko` file in component directory in VS Code
2. On a mac open command list by pressing `Cmd+Shift+P`
3. Type replace-ne

##Installation

1. Find and download latest version of distribution in `dist` directory here which is in the `.vsix` format
2. VSCode-->Extensions-->Click on 3 dots in left panel-->Install from VSIX-->Point to downloaded file

*Currently marketplace is not featuring the extension hence follow the above steps. Keep checking this section to the extension link on marketplace*

## Requirements

VSCode v1.17 and higher

## Extension Settings

None for now

## Known Issues

Good Case : `(notEmpty(data.obj))` Result : `(data.obj)`
Possible Broken Use-Case `notEmpty(data.obj)` Result `data.obj`

## Release Notes

### 1.0.0

Initial release of replace-ne

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
