var batmanFightStream = require('./')

batmanFightStream({count: 100, newline: true})
  .pipe(process.stdout)
