import fs from 'fs';
import data from './Cities.json' assert { type: 'json' };

async function getNearbyCities(id = 'Q24639') {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${id}/nearbyCities?radius=100`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':
                '09c8b94ea5mshfffa1c6d784e17ep131ad0jsn0b4e51248777',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let nearbyCities = [];
        // Loop through, find cities with distance > 0.50
        for (let i = 0; i < result.data.length; i++) {
            if (result.data[i].distance > 0.5) {
                nearbyCities.push(result.data[i].city);
            }
        }
        console.log(nearbyCities);
        return nearbyCities;
    } catch (error) {
        console.error(error);
    }
}

function getQID(name) {
    const match = data.find(
        (element) => element['cityLabel'].toLowerCase() === name.toLowerCase()
    );
    return match?.city?.replace('http://www.wikidata.org/entity/', '');
}

export { getQID };

getNearbyCities('Q24639');

export default getNearbyCities;
