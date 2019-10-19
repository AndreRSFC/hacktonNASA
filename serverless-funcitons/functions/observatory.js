const nasaURL = 'https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/observatories';
const apiURL = 'http://localhost:3030/observatories';

const axios = require('axios');

module.exports.processObservatory = async () => {
    const response = await axios.get(nasaURL);

    const arrayObservatories = response.data.Observatory[1];

    for (const observatory of arrayObservatories) {
        const { Id, Name, Resolution,StartTime, EndTime } = observatory;

        const body = {
            symbol: Id,
            name: Name,
            resolution: Resolution,
            startTime: StartTime[1],
            endTime: EndTime[1]
        }

        try {
            await axios.post(apiURL, body)
            console.log(`Add ${Name}...`)
        } catch (error) {
            throw(error);
        }
    }
}