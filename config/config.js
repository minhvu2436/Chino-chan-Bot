const NodeCache = require('node-cache')

const config = {
    prefix: '/',
    openaikey: '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',
    cache: new NodeCache({
        checkperiod: 10000,
        deleteOnExpire: true
    }),
    ratelimit: new Map(),
    commands: new Map(),
    aliases: new Map()
}

module.exports = config
