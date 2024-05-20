const search = async (business) => {

    
    const url = `https://local-business-data.p.rapidapi.com/search?query=${business}&limit=5&language=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aece92988cmshc945ee7e8d1f723p1807a9jsn1daea7bdb972',
            'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
        }
    };
    
    try {
        //const url = '../api/business.json'
        //const response = await fetch(url);
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}