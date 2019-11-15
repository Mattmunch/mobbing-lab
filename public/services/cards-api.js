
const URL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';

// module.exports = {
//     async get(search) {
//         search = search || '';

//         const response = await request
//             .get(URL)
//             .query({ search });
//         return response.body.map(generateIsFavoriteFalse);
//     }
// };
// function generateIsFavoriteFalse(card) {
//     card.isFavorite = false;
//     return card;
// }

export function getCards() {  
    const url = `${URL}`;
    return fetchWithError(url);
}

async function fetchWithError(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
        return data;
    }
    else {
        throw data.error;
    }
}

export default getCards;