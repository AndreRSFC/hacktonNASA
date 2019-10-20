const request = require('request')
const { promisify } = require('util');
const requestPromise = promisify(request);

module.exports.parseDescription = async (listProps) => {
    const observatoryProperties = []
    const parsedList = listProps.filter(p => p.observatoryLink !== undefined)
    for (const listProp of parsedList) {
        console.log('Parsing description...')
        const req = await requestPromise(`https:${listProp.observatoryLink}`)
        const resJSON = JSON.parse(req.body)
        observatoryProperties.push({
            observatoryReleaseDate: resJSON.ResourceHeader.ReleaseDate,
            observatoryDescription: resJSON.ResourceHeader.Description,
            observatoryName: listProp.observatoryName,
        })
    }
    return observatoryProperties
}
