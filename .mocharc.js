module.exports = {
    timeout: 60000,
    require: [
        'ts-node/register',
        './test/mocha.patch'
    ]
}
