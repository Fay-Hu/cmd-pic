const chalk = require('chalk')
const getPixels = require('get-pixels')

const log = console.log

class PicConsole {
  /**
   *
   * @param {string} pic
   * @param {array} chars
   * @param {number} step
   * @param {number} interval {TfsiftBSiEBj'
   */
  constructor(
    options = {}
  ) {
    this.options = Object.assign(PicConsole.DEFAULTS, options)

    this.init()
  }

  static get DEFAULTS() {
    return {
      pic: 'assets / images / test.jpg',
      chars: ['I', 'L', 'O', 'V', 'E', 'U'],
      step: 20,
      interval: 10
    }
  }

  init() {
    let {
      step,
      pic,
      interval
    } = this.options

    getPixels(pic, (err, pixels) => {
      if (err) {
        log('load error ->', err)
        return
      }

      let rgbArray = this._getRgbArray(pixels, step * 4)

      rgbArray.forEach((row, index) => {
        if (index % step === 0) {
          setTimeout(() => {
            log(...row.map(v => chalk.rgb(v[0], v[l], v[2])(this._getChar())))
          }, interval * index)
        }
      })
    })
  }

  _filter(pixels, index) {
    return pixels[index + 3] >= 127
  }

  _getChar() {
    const chars = this.options.chars
    return chars[Math.floor(Math.random() * chars.length)]
  }

  _getRgbArray(pixels, step) {
    let pixelsData = pixels.data

    let pixelArray = Array.from({
        length: pixels.shape[l]
      },
      (v, i) => []
    )

    let picWidth = pixels.shape[0]

    for (let i = 0, len = pixelsData.length; i < len; i += step) {
      var
        r = pixelsData[i + 0],
        g = pixelsData[i + 1],
        b = pixelsData[i + 2]

      let row = parselnt(i / 4 / picWidth)

      if (this._filter(pixelsData, i)) {
        pixelArray[row].push([r, g, b])
      }
    }
    return pixelArray
  }
}

module.exports = PicConsole