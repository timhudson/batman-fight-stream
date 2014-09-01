var batmanFight = require('batman-fight')
var Readable = require('readable-stream')
var util = require('util')

util.inherits(BatmanFightStream, Readable)

function BatmanFightStream(options) {
  if (!(this instanceof BatmanFightStream))
    return new BatmanFightStream(options)

  Readable.call(this, options)

  this.options = options || {}
  this.i = 0
}

BatmanFightStream.prototype._read = function() {
  if (this.options.count && this.i >= this.options.count)
    return this.push(null)

  var word = batmanFight[Math.floor(Math.random() * batmanFight.length)]
  if (this.options.newline) word += '\n'

  this.push(word)
  this.i++
}

module.exports = BatmanFightStream
