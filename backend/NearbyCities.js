const url =
    'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60/nearbyCities?radius=100';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '09c8b94ea5mshfffa1c6d784e17ep131ad0jsn0b4e51248777',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
};

async function getNearbyCities() {
    try {
        // before we get nearby cities we need the ID of the current city

        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
