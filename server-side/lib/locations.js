import axios from 'axios';
import Observatory from '../src/app/models/Observatory';
import ObservatoryLocations from '../src/app/models/ObservatoryLocations';

export default async function processLocation() {

    let cont = 0;
    const observatories = await Observatory.find();

    for (const observatory of observatories) {
        const time = new Date();
        const url = `https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/locations/${observatory.symbol}/20190101T000000Z,20190101T001000Z/geo/`;
        
        const response = await axios.get(url);

        if (response.data.Result.Data) {
            const locationObj = response.data.Result.Data[1]['0'];

        
            const latitudeArr = locationObj.Coordinates[1]['0'].Latitude[1];
            const longitudeArr = locationObj.Coordinates[1]['0'].Longitude[1];

            let latitude = latitudeArr[latitudeArr.length - 1]
            let longitude = longitudeArr[longitudeArr.length - 1] - 180

            if (cont < 6) {
                // Mock Belo Horizonte Location
                latitude = -19.8157
                longitude = -43.9542

                cont++;
            }

            console.log(`Update ${observatory}...`)
            console.log({
                observatorySymbol: observatory.symbol,
                latitude,
                longitude,
                time,
            });
            await ObservatoryLocations.update({observatorySymbol: observatory.symbol}, {
                observatorySymbol: observatory.symbol,
                latitude,
                longitude,
                time,
            }, {upsert: true})
        }
    }
}