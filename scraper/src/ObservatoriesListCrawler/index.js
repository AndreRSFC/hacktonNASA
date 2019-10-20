const parseDescription = require('../ObservatoriesDescriptionCrawler')
const cheerio = require('cheerio')
const { promisify } = require('util');
const request = require('request')

const requestPromise = promisify(request);

module.exports.parseList = async () => {
    const observatoryListProperties = await parseHTML()
    const props = await parseDescription.parseDescription(observatoryListProperties)
    return props
}
async function parseHTML() {
    const observatoryProperties = []
    const req = await requestPromise('https://cdaweb.gsfc.nasa.gov/registry/hdp/Observatories.xql')
    const $ = cheerio.load(req.body)
    console.log('Parsing list informations...')
    $('tbody tr').each(/*async*/ function () {
        const [obsName, b] =  $(this).find('td').text().trim().split(':')
        const observatoryName = obsName.replace(/spase/ig, '')
        const observatoryLink = $(this).find('td > a').attr('href')
        const property = {
            observatoryName: observatoryName,
            observatoryLink: observatoryLink,
            observatoryReleaseDate: '',
            observatoryDescription: '',
        }
        if (property) {
            observatoryProperties.push(property)
        }
    });
    return observatoryProperties
}
