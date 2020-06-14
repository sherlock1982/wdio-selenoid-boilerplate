# wdio-selenoid-boilerplate
WebdriverIO 6 Selenoid boilerplate project with video support

This is a boilerplate test project that uses WebdriverIO 6 to connect to Selenoid Hub.

- WebdriverIO
- Typescript
- Eslint
- Mocha framework
- [WebdriverIO Selenoid Video reporter](https://github.com/sherlock1982/wdio-selenoid-video-reporter)

Usage & configuration 
=============

Please set `hostname` in `wdio.conf.js` to your Selenoid Hub hostname.

Run `npm t` to proceed with a simple test

Run `npm run lint` to lint your tests

WebStorm compatibility 
=============

WebStorm doesn't have a convenient way to launch WebdriverIO tests. That's why I added a couple of files to help you run WebdriverIO tests directly from IDE.

`mocha.opts` file will be included automatically when WebStorm will launch a Mocha test.

`mocha.patch.js` contains necessary boilerplate code to initialize WebdriverIO and run it under Mocha

With these files you will be able to launch and debug your tests from WebStorm IDE
