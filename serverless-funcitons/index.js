const observatoryFunc = require('./functions/observatory');

class Main {
    constructor() {}

    async init() {
        console.log('Processing observatories...');
        await observatoryFunc.processObservatory();
    }
}

new Main().init()
