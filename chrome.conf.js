module.exports ={

    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    // maxInstances: 5,
    //
    browserName: 'chrome',

    'goog:chromeOptions': {
        args: [
            '--disable-infobars',
            '--window-size=1366,768',
            '--use-fake-ui-for-media-stream',
            '--use-fake-device-for-media-stream',
        ]
    },

    // If outputDir is provided WebdriverIO can capture driver session logs
    // it is possible to configure which logTypes to include/exclude.
    // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    // excludeDriverLogs: ['bugreport', 'server'],
    'selenoid:options': {
        enableVNC: true,
        enableVideo: true,
        screenResolution: '1366x768x24',
    },
}
