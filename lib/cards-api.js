const request = require('superagent');
const URL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';

module.exports = {
    async get(search) {
        search = search || '';

        const response = await request
            .get(URL)
            .query({ search });
        return response.body.map(generateIsFavoriteFalse);
    }
};
function generateIsFavoriteFalse(card) {
    card.isFavorite = false;
    return card;
}