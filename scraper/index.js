const parseList = require('./src/ObservatoriesListCrawler')
const axios = require('axios')

class Main {
    constructor() { }
    async init() {
        const parsedProperties = await parseList.parseList()
        console.log(parsedProperties)
        for (const prop of parsedProperties) {
            const {observatoryName, ...properties} = prop
            console.log(`Updating ${observatoryName}...`)

            try {
                const response = await axios.put(`http://localhost:3030/observatories/?symbol=${observatoryName}`, properties)
                console.log(response.data)
            } catch (error) {
                throw new Error(error)                
            }
 
        }
    }

}

new Main().init()