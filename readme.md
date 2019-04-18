## 在终端界面输出字符画的一段小脚本

### 使用步骤

- `npm install` 安装依赖
- `npm start` 输出图形

### 参数
```javascript
/**
 *
 * @param {string} pic 引用图片地址
 * @param {array} chars 使用的字符 默认为['I', 'L', 'O', 'V', 'E', 'U']
 * @param {number} step 跳过的像素
 * @param {number} interval 输出延时
 */

new PicConsole({
  pic: 'assets/images/zuguo.png'
})
```