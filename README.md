# batman-fight-stream

Read stream of [batman fight](https://www.npmjs.org/package/batman-fight) words

```
npm install batman-fight-stream
```

## Example

``` js
var batmanFightStream = require('batman-fight-stream')

batmanFightStream({count: 100, newline: true})
  .pipe(process.stdout)
```

## License

MIT
